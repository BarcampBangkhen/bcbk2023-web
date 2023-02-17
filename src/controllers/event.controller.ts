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

export const SetRulesTwitter = async (req: Request, res: Response) => {
  let currentRules

  try {
    // Gets the complete list of rules currently applied to the stream
    currentRules = await getAllRules()

    // Delete all rules. Comment the line below if you want to keep your existing rules.
    await deleteAllRules(currentRules)

    // Add rules to the stream. Comment the line below if you don't want to add new rules.
    await setRules()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  res
    .status(200)
    .json({ status: currentRules, token: Constant.TwitterBearerToken })
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

export const StreamTwitter2 = (req: Request, res: Response) => {
  res.status(200).json({ Status: 'Success' })
}
