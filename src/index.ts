import express, { Request, Response, Router } from 'express'
import faqRouter from './routes/faq.route'
import { connect, set } from 'mongoose'
import { Constant } from './constant'
import path from 'path'
import cors from 'cors'

const app = express()
const port = Constant.Port
const staticPath = path.normalize(
  path.join(__dirname, '..', 'frontend', 'build')
)
const corsOptions = {
  origin: 'localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(express.static(staticPath))

const apiRouter = Router()
apiRouter.use('/faq', faqRouter)

app.use('/api', cors(corsOptions), apiRouter)

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

set('strictQuery', false)
connect(Constant.dbUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server started on port ${port}`))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
