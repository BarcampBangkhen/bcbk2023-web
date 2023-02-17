import React, { useEffect, useState } from 'react'
import { TweetInfo } from '../models/TweetInfo'
import TwitterCard from '../components/TwitterCard'
import axios from 'axios'
import { ApiBaseUrl } from '../Constant'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const TwitterWall = () => {
  const [tweets, setTweets] = useState<TweetInfo[]>([])
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [hashtag, setHashtag] = useState('')
  const [SettingModalOpen, setSettingModelOpen] = useState(false)

  useEffect(() => {
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'
    const host = import.meta.env.VITE_API_BASE_PATH
      ? import.meta.env.VITE_API_BASE_PATH.replace('http://', '').replace(
          '/api',
          ''
        )
      : location.host
    const path = '/api/event/twitter/stream'
    const newSocket = new WebSocket(`${protocol}//${host}${path}`)

    newSocket.onmessage = (event: MessageEvent) => {
      const tweetInfo: TweetInfo = JSON.parse(event.data)
      setTweets((current) => [tweetInfo, ...current])
    }

    newSocket.onclose = (event) => {
      alert('Maximum connection reached')
    }

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  const getCurrentHashtag = async () => {
    const response = await axios.get(ApiBaseUrl + '/event/twitter')
    setHashtag(response.data.value)
  }

  const onOpenModal = () => {
    setSettingModelOpen(true)
    getCurrentHashtag()
  }

  const sendHashtag = async () => {
    const response = await axios.post(ApiBaseUrl + '/event/twitter', {
      value: hashtag
    })
    if (response.status !== 200) alert('Hashtag not changed')
    else setSettingModelOpen(false)
  }

  return (
    <div className="pt-10 w-screen h-screen">
      <div className="text-center grid place-content-center h-1/10">
        <div onClick={onOpenModal}>
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
      <div className="py-10 px-5 flex flex-wrap justify-center">
        {tweets.map((tweet, index) => {
          return (
            <div key={index} className="grid place-content-center">
              <TwitterCard
                users={tweet.includes.users}
                description={tweet.data.text}
                images={tweet.includes.media}
              />
            </div>
          )
        })}
      </div>
      <Modal
        isOpen={SettingModalOpen}
        onRequestClose={() => setSettingModelOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>Hashtag following</h2>
        <input
          type="text"
          value={hashtag}
          onChange={(e) => {
            setHashtag(e.target.value)
          }}
        />
        <button onClick={sendHashtag}>Submit</button>
        <div>
          <button onClick={() => setSettingModelOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default TwitterWall
