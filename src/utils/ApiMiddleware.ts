import { NextFunction, Request, Response } from 'express'

export const preventManualAccess = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const referer = req.headers.referer
  if (!referer) return res.sendStatus(401)
  next()
}
