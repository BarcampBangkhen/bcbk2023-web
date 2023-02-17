import { Request, Response } from 'express'
import path from 'path'
import { getFileList } from '../utils/FileHandler'

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
