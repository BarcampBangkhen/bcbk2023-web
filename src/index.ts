import express, { Request, Response, Router } from 'express'
import faqRouter from './routes/faq.route'
import { connect, set } from 'mongoose'
import { Constant } from './constant'
import path from 'path'
import cors from 'cors'
import favicon from 'serve-favicon'

const app = express()
const port = Constant.Port
const staticPath = path.normalize(
  path.join(__dirname, '..', 'frontend', 'build')
)

app.use(express.json())
app.use(favicon(path.join(__dirname, '..', 'views/images/favicon.ico')))
app.use(express.static(staticPath))

const apiRouter = Router()
apiRouter.use('/faq', faqRouter)

app.set('view engine', 'ejs')
app.use('/api', cors(), apiRouter)

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
