import { NextFunction, Request, Response } from 'express'
import { Admin } from '../models/User.model'

export const validate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = await Admin.findOne({
    credential: req.headers.authorization?.replace('Basic ', '')
  })
  if (admin === null) return res.status(401).json({})
  next()
}

export const validateSponsor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(500).json({ status: 'In development' })
}
