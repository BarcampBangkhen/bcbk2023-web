import { Request, Response } from 'express'
import {
  TwitterStream,
  deleteAllRules,
  getAllRules,
  setRules
} from '../services/twitter.service'
import { Constant } from '../constant'
import { WebsocketRequestHandler } from 'express-ws'
import logger from '../utils/logger'
import { TweetInfo } from '../schemas/twitter.schema'

let myInterval: any

export const GetRulesTwitter = async (req: Request, res: Response) => {
  const rules = await getAllRules()
  return res.status(200).json({ value: rules.data[0].value.split(' ')[0] })
}

export const SetRulesTwitter = async (req: Request, res: Response) => {
  let currentRules

  try {
    // Gets the complete list of rules currently applied to the stream
    currentRules = await getAllRules()

    // Delete all rules. Comment the line below if you want to keep your existing rules.
    await deleteAllRules(currentRules)

    // Add rules to the stream. Comment the line below if you don't want to add new rules.
    await setRules(req.body.value.replaceAll(" ", ''))
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  res.status(200).json({ status: 'success' })
}

export const StreamTwitter: WebsocketRequestHandler = (ws, req) => {
  if (TwitterStream.getClientCount() > 8) {
    return ws.close()
  }
  const sendWs = (data: any) => {
    try {
      const jsonData: TweetInfo = JSON.parse(data)
      jsonData.data.text = jsonData.data.text.replace(
        /https:\/\/t\.co\/\w+/gm,
        ''
      )
      ws.send(JSON.stringify(jsonData))
    } catch (e) {
      if (
        data.detail ===
        'This stream is currently at the maximum allowed connection limit.'
      ) {
        console.log('Error:', data)
        ws.close()
      }
    }
  }
  const stream = TwitterStream.get()
  stream.resume()
  stream.on('data', sendWs)
  ws.on('close', () => {
    stream.off('data', sendWs)
    logger.info('Listener removed')
  })
}

export const StreamTwitter2: WebsocketRequestHandler = (ws, req) => {
  myInterval = setInterval(() => {
    ws.send(
      `{"data":{"attachments":{"media_keys":["3_1626483865966776324","3_1626483866025484288","3_1626483865966776322"]},"author_id":"874061671727104000","edit_history_tweet_ids":["1626483873659092992"],"id":"1626483873659092992","text":"#tawanb "},"includes":{"media":[{"media_key":"3_1626483865966776324","type":"photo","url":"https://pbs.twimg.com/media/FpJudWfakAQW8V7.jpg"},{"media_key":"3_1626483866025484288","type":"photo","url":"https://pbs.twimg.com/media/FpJudWtaYAAyDfV.jpg"},{"media_key":"3_1626483865966776322","type":"photo","url":"https://pbs.twimg.com/media/FpJudWfakAIfr6N.jpg"}],"users":[{"id":"874061671727104000","name":"TawanB.","profile_image_url":"https://pbs.twimg.com/profile_images/1227602822868303874/ttfU-OF3_normal.jpg","username":"Tboonmaeiei"}]},"matching_rules":[{"id":"1626084620377944067","tag":"tawanb"}]}`
    )
  }, 2000)
  ws.on('close', () => {
    clearInterval(myInterval)
  })
}
