import admin from 'firebase-admin'
import { Constant } from '../constant'
import path from 'path'
import fs from 'fs'

const serviceAccount = require('./firebase.json')

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: Constant.StorageBucket
})

export const getImageFromFirebase = async (directoryName: string) => {
  const folder = 'sponsors'
  const storage = firebaseApp.storage()
  const bucket = storage.bucket()
  const [files] = await bucket.getFiles({ prefix: 'sponsor/img-' })
  return files.map(function (item) {
    return item.name
  })
}

export const saveImageToFirebase = (file: any, filename: string) => {
  const folder = 'sponsors'
  const storage = firebaseApp.storage()
  const bucket = storage.bucket()
  const time = new Date().toISOString().slice(0, 10).replace(/-/g, '')
}

export const saveImageToLocal = (file: any, filename: string) => {
  const saveTo = path.join(__dirname, 'uploads/' + filename)
  file.pipe(fs.createWriteStream(saveTo))
}
