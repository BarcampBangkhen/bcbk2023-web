import React, { useCallback, useEffect, useState } from 'react'
import ImageCollage from './ImageCollage'
import { TwitterMedia, TwitterUser } from '../../models/TweetInfo'
import User from './User'
import { useSpring, animated } from 'react-spring'

export interface TwitterCardProps {
  users: TwitterUser[]
  description: string
  images?: TwitterMedia[]
  shouldBounce?: boolean
}

const TwitterCard = ({
  users,
  description,
  images,
  shouldBounce
}: TwitterCardProps) => {
  const [isBouncing, setIsBouncing] = useState(false)

  const springProps = useSpring({
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.2)' },
      { transform: 'scale(0.9)' },
      { transform: 'scale(1)' }
    ],
    config: {
      duration: 200
    },
    onRest: () => setIsBouncing(false)
  })

  useEffect(() => {
    if (shouldBounce) {
      setIsBouncing(true)
    }
  }, [shouldBounce])

  return (
    <animated.div
      style={shouldBounce ? springProps : {}}
      className="w-80 mx-4 my-6 bg-white rounded-2xl overflow-hidden shadow-lg border-Neutral01"
    >
      <ImageCollage images={images} />
      <div className="py-4 px-6">
        {users.length > 0 && <User user={users[0]} />}
        <p className="text-Falu100 pt-4">{description}</p>
      </div>
    </animated.div>
  )
}

export default TwitterCard
