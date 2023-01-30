import { Request, Response } from 'express'
import path from 'path'
import Busboy from 'busboy'
import fs from 'fs'
import { Sponsor, SponsorLogoSize } from '../models/Sponsor.model'

export const GetAllSponsors = (req: Request, res: Response) => {
  res.send(500).json({ status: 'In development' })
}

export const ManageSponsors = (req: Request, res: Response) => {
  const logoSizes = Object.keys(SponsorLogoSize)
  res.render(path.join(__dirname, '../..', 'views/sponsor'), {
    sponsors: [],
    sizes: logoSizes
  })
}

export const AddSponsor = (req: Request, res: Response) => {
  const busboy = Busboy({ headers: req.headers })
  let size: SponsorLogoSize

  busboy.on('file', (fieldname: string, file: any, filename: any) => {
    if (fieldname === 'filetoupload') {
      const saveTo = path.join(__dirname, 'uploads/' + filename.filename)
      file.pipe(fs.createWriteStream(saveTo))
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
