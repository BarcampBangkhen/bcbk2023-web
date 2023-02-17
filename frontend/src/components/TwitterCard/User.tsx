import React from 'react'
import { TwitterUser } from '../../models/TweetInfo'

export interface UserProps {
  user: TwitterUser
}

const User = ({ user }: UserProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={user.profile_image_url}
        alt="ProfileImg"
        style={{ borderRadius: '50%' }}
      />
      <div>
        <p className="text-black font-medium text-base">{user.name}</p>
        <p className="text-Neutral03 font-normal text-xs">@{user.username}</p>
      </div>
    </div>
  )
}

export default User
