// Open a realtime stream of Tweets, filtered according to rules
// https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/quick-start

import axios from 'axios'
import { Constant } from '../constant'
import {
  TweetInfo,
  TwitterStreamData,
  TwitterStreamRules
} from '../schemas/twitter.schema'
import needle from 'needle'
import { stringify } from 'querystring'
import logger from '../utils/logger'

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = Constant.TwitterBearerToken

const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream'
const streamFields = {
  'tweet.fields': 'id,text,attachments,author_id',
  'user.fields': 'id,name,username,profile_image_url',
  'media.fields': 'type,url',
  expansions: 'author_id,attachments.media_keys'
}

// this sets up two rules - the value is the search terms to match on, and the tag is an identifier that
// will be applied to the Tweets return to show which rule they matched
// with a standard project with Basic Access, you can add up to 25 concurrent rules to your stream, and
// each rule can be up to 512 characters long

// Edit rules as desired below
const rules: TwitterStreamData[] = [
  {
    value: `#${Constant.TwitterHashtag} -is:retweet -is:reply`,
    tag: Constant.TwitterHashtag
  }
]

export async function getAllRules() {
  const response = await axios.get<TwitterStreamRules>(rulesURL, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  if (response.status !== 200) {
    console.log('Error:', response.statusText, response.status)
    throw new Error('Error: ' + response.statusText + ' ' + response.status)
  }

  return response.data
}

export async function deleteAllRules(rules: TwitterStreamRules) {
  if (!Array.isArray(rules.data)) {
    return null
  }

  const ids = rules.data.map((rule: any) => rule.id)

  const data = {
    delete: {
      ids: ids
    }
  }

  const response = await axios.post(rulesURL, data, {
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })

  if (response.status !== 200) {
    throw new Error(response.data)
  }

  return response.data
}

export async function setRules() {
  const data = {
    add: rules
  }

  const response = await axios.post(rulesURL, data, {
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })

  if (response.status !== 201) {
    throw new Error(response.data)
  }

  return response.data
}

export class TwitterStream {
  private static stream?: any
  private static pollingCheck: NodeJS.Timer

  private static getInstance = () => {
    const url = streamURL + '?' + stringify(streamFields)
    console.log(url)

    const stream = needle.get(url, {
      headers: {
        'User-Agent': 'v2FilterStreamJS',
        Authorization: `Bearer ${token}`
      },
      timeout: 10000
    })
    stream
      .on('err', (error) => {
        if (error.code !== 'ECONNRESET') {
          console.log('Error:', error.code)
          process.exit(1)
        } else {
          // This reconnection logic will attempt to reconnect when a disconnection is detected.
          // To avoid rate limits, this logic implements exponential backoff, so the wait time
          // will increase if the client cannot reconnect to the stream.
          console.warn('A connection error occurred. Reconnecting...')
          process.exit(1)
        }
      })
    this.pollingCheck = setInterval(this.checkListener, 5000)
    return stream
  }

  static get = () => {
    if (this.stream === undefined) {
      const stream = this.getInstance()
      this.stream = stream
      return stream
    }
    return this.stream
  }

  static checkListener = () => {
    console.log('Current client:', this.stream?.listenerCount('data'))
    if (this.getClientCount() < 1) {
      this.stream.pause()
      this.stream.request.abort()
      this.stream = undefined
      clearInterval(this.pollingCheck)
      logger.info('Stream disconnected.')
    }
  }

  static getClientCount = () => {
    return this.stream?.listenerCount('data') ?? 0
  }
}
