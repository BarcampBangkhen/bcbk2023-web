import { Request, Response } from 'express'
import path from 'path'
import Busboy from 'busboy'
import fs from 'fs'
import { Sponsor, SponsorLogoSize } from '../models/Sponsor.model'
import { getFileList } from '../utils/FileHandler'
import { getImageFromFirebase, saveImageToLocal } from '../services/storage.service'

export const GetAllSponsors = async (req: Request, res: Response) => {
  const largeSponsorsPath = path.join(
    __dirname,
    '../..',
    'frontend/build/assets/sponsors/big'
  )
  const mediumSponsorsPath = path.join(
    __dirname,
    '../..',
    'frontend/build/assets/sponsors/medium'
  )
  const smallSponsorsPath = path.join(
    __dirname,
    '../..',
    'frontend/build/assets/sponsors/small'
  )
  const bigSponsors = await getFileList(largeSponsorsPath)
  const mediumSponsors = await getFileList(mediumSponsorsPath)
  const smallSponsors = await getFileList(smallSponsorsPath)
  res
    .status(200)
    .json({
      large: bigSponsors.map((filename) => '/assets/sponsors/big/' + filename),
      medium: mediumSponsors.map((filename) => '/assets/sponsors/medium/' + filename),
      small: smallSponsors.map((filename) => '/assets/sponsors/small/' + filename),
    })
}

export const ManageSponsors = async (req: Request, res: Response) => {
  const logoSizes = Object.keys(SponsorLogoSize)
  const allImages = await getImageFromFirebase("sponsor")
  console.log(allImages);
  res.render(path.join(__dirname, '../..', 'views/sponsor'), {
    sponsors: [],
    sizes: logoSizes
  })
}

export const AddSponsor = async (req: Request, res: Response) => {
  const busboy = Busboy({ headers: req.headers })
  let size: SponsorLogoSize

  busboy.on('file', async (fieldname: string, file: any, filename: any) => {
    if (fieldname === 'filetoupload') {
      saveImageToLocal(file, filename.filename)
    }
  })

  busboy.on('field', (fieldname: string, value: string) => {
    if (fieldname === 'size') {
      size = value as SponsorLogoSize
    }
  })

  busboy.on('finish', function () {
    res.writeHead(200, { Connection: 'close' })
    res.end()
  })

  return req.pipe(busboy)
}

export const EditSponsor = (req: Request, res: Response) => {
  res.send(500).json({ status: 'In development' })
}

export const RemoveSponsor = (req: Request, res: Response) => {
  res.send(500).json({ status: 'In development' })
}
