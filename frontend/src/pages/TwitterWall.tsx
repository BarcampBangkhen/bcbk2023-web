import React, { useEffect, useState } from 'react'
import { TweetInfo } from '../models/TweetInfo'
import TwitterCard from '../components/TwitterCard'

const TwitterWall = () => {
  const [tweets, setTweets] = useState<TweetInfo[]>([])
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const numImages = 3

  useEffect(() => {
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    const host =
      import.meta.env.VITE_API_BASE_PATH.replace('http://', '').replace(
        '/api',
        ''
      ) ?? location.host
    const path = '/api/event/twitter/stream'
    const newSocket = new WebSocket(`${protocol}//${host}${path}`)

    newSocket.onmessage = (event: MessageEvent) => {
      const tweetInfo: TweetInfo = JSON.parse(event.data)
      console.log('Received message:', tweetInfo)
      setTweets((current) => [...current, tweetInfo])
    }

    newSocket.onclose = (event) => {
      alert('Maximum connection reached')
    }

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  useEffect(() => {
    const mockData: TweetInfo = {
      data: {
        attachments: {
          media_keys: undefined
        },
        author_id: '',
        edit_history_tweet_ids: [],
        id: '',
        text: ''
      },
      includes: {
        users: [
          {
            id: '874061671727104000',
            name: 'TawanB.',
            profile_image_url:
              'https://pbs.twimg.com/profile_images/1227602822868303874/ttfU-OF3_normal.jpg',
            username: 'Tboonmaeiei'
          }
        ],
        media: undefined
      },
      matching_rules: []
    }
  })

  return (
    <div className="pt-10 w-screen h-screen">
      <div className="text-center grid place-content-center h-1/10">
        <div className="">
          <img
            src="/assets/Logo.svg"
            alt="LogoBarcamp"
            className="w-full"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
        <div>
          <img
            src="/assets/LogoBarcamp.svg"
            alt="TxtBarcamp"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
      </div>
      <div className="p-10 flex flex-wrap justify-center">
        {tweets.map((tweet, index) => {
          return (
            <div key={index}>
              <TwitterCard
                users={tweet.includes.users}
                description={tweet.data.text}
                images={tweet.includes.media}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TwitterWall
