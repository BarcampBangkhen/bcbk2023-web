import express, { Request, Response, Router } from 'express'
import faqRouter from './routes/faq.route'
import { connect, set } from 'mongoose'
import { Constant } from './constant'
import path from 'path'
import fs from 'fs'

const app = express()
const port = Constant.Port
const staticPath = path.normalize(
  path.join(__dirname, '..', 'frontend', 'build')
)

app.use(express.json())
app.use(express.static(staticPath))

const apiRouter = Router()
apiRouter.use('/faq', faqRouter)

app.use('/api', apiRouter)

app.get('/debug', async (req: Request, res: Response) => {
  let selectedPath = path.join(__dirname, '..', 'frontend')
   fs.readdir(selectedPath, async (err, files) => {
    files.forEach((file) => {
      console.log(file)
    })
  })
  res.status(200).json({ Data: selectedPath})
})

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
