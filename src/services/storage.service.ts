import admin from 'firebase-admin'
import { Constant } from '../constant'

const serviceAccount = require('firebase.json')

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: Constant.StorageBucket
})

export const saveImageToFirebase = (file: any, filename: string) => {
  const folder = 'sponsors'
  const storage = firebaseApp.storage()
  const bucket = storage.bucket()
  const time = Date.now().toLocaleString()
}
