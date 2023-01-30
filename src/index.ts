import express, { NextFunction, Request, Response, Router } from 'express'
import faqRouter from './routes/faq.route'
import timetableRouter from './routes/timetable.route'
import sponsorRouter from './routes/sponsor.route'
import { connect, set } from 'mongoose'
import { Constant } from './constant'
import path from 'path'
import cors from 'cors'
import logger from './utils/logger'

const app = express()
const port = Constant.Port
const staticPath = path.normalize(
  path.join(__dirname, '..', 'frontend', 'build')
)

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.includes('assets')) return next()
  logger.info(`Request ${req.method}: ${req.originalUrl}`)
  res.on('finish', () => {
    const statusCode = res.statusCode.toString()
    if (statusCode.startsWith('2') || statusCode.startsWith('3'))
      logger.info(
        `${req.originalUrl} Returned ${res.statusCode} ${res.statusMessage}`
      )
    else if (statusCode.startsWith('4'))
      logger.warn(
        `${req.originalUrl} Returned ${res.statusCode} ${res.statusMessage}`
      )
    else if (statusCode.startsWith('5'))
      logger.error(
        `${req.originalUrl} Returned ${res.statusCode} ${res.statusMessage}`
      )
  })
  next()
})
app.use(express.json())

const apiRouter = Router()
apiRouter.use('/faq', faqRouter)
apiRouter.use('/timetable', timetableRouter)
apiRouter.use('/sponsor', sponsorRouter)

app.set('view engine', 'ejs')
app.use('/api', cors(), apiRouter)

app.use(express.static(staticPath))
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

set('strictQuery', false)
connect(Constant.dbUrl)
  .then(() => {
    app.listen(port, () => logger.info(`Server started on port ${port}`))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
