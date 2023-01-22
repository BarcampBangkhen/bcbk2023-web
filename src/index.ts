import express, { NextFunction, Request, Response, Router } from 'express'
import faqRouter from './routes/faq.route'
import timetableRouter from './routes/timetable.route'
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

app.use(express.json())
app.use(express.static(staticPath))
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method}: ${req.originalUrl}`)
  next()
})

const apiRouter = Router()
apiRouter.use('/faq', faqRouter)
apiRouter.use('/timetable', timetableRouter)

app.set('view engine', 'ejs')
app.use('/api', cors(), apiRouter)

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
