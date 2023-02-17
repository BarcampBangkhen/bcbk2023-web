export interface TwitterStreamData {
  id?: string
  value: string
  tag: string
}

export interface TwitterStreamRules {
  data: TwitterStreamData[]
  meta?: {
    sent: string
    result_count: number
  }
}

interface TwitterRule {
  id: string
  tag: string
}

export interface TwitterUser {
  id: string
  name: string
  profile_image_url: string
  username: string
}

export interface TwitterMedia {
  media_key: string
  type: string
  url: string
}

export interface TweetInfo {
  data: {
    attachments: {
      media_keys?: string[]
    }
    author_id: string
    edit_history_tweet_ids: string[]
    id: string
    text: string
  }
  includes: {
    users: TwitterUser[]
    media?: TwitterMedia[]
  }
  matching_rules: TwitterRule[]
}
