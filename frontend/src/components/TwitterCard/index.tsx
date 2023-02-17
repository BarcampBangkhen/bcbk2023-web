import React from 'react'
// @ts-ignore
import { ImageGrid } from 'react-fb-image-video-grid'
import ImageCollage from './ImageCollage'
import { TwitterMedia, TwitterUser } from '../../models/TweetInfo'
import User from './User'

export interface TwitterCardProps {
  users: TwitterUser[]
  description: string
  images?: TwitterMedia[]
}

const TwitterCard = ({ users, description, images }: TwitterCardProps) => {
  return (
    <div className="w-80 mx-4 my-6 bg-white rounded-2xl overflow-hidden shadow-lg border-Neutral01 bounce">
      <ImageCollage images={images} />
      <div className="py-4 px-6">
        {users.length > 0 && <User user={users[0]} />}
        <p className="text-Falu100 pt-4">{description}</p>
      </div>
    </div>
  )
}

export default TwitterCard
