import dotenv from 'dotenv'
dotenv.config()

interface IConstant {
    Port: number
    dbUrl: string
    StorageBucket: string
}

export const Constant: IConstant = {
    Port: parseInt(process.env.PORT || '8080'),
    dbUrl: process.env.MONGO_URI || "",
    StorageBucket: process.env.STRORAGE_BUCKET || ""
}