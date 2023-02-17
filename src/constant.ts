import dotenv from 'dotenv'
dotenv.config()

interface IConstant {
    Port: number
    dbUrl: string
    StorageBucket: string
    TwitterBearerToken: string
    TwitterHashtag: string
}

export const Constant: IConstant = {
    Port: parseInt(process.env.PORT || '8080'),
    dbUrl: process.env.MONGO_URI || "",
    StorageBucket: process.env.STRORAGE_BUCKET || "",
    TwitterBearerToken: process.env.TWITTER_BEARER_TOKEN || "",
    TwitterHashtag: process.env.TWITTER_HASHTAG || "testbcbk"
}