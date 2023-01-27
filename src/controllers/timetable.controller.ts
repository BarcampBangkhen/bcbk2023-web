import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import { ITimetable, Timetable } from '../models/TImetable.model'

const getFileList = async (path: string) => {
  const filesList = await fs.promises.readdir(path)
  return filesList
}
export const GetAllTimetable = async (req: Request, res: Response) => {
  const timetable = await Timetable.find({
    $and: [
      {
        $or: [
          { icon: { $ne: '' }, title: { $ne: '' }, time: { $ne: '' } },
          { icon: '-' }
        ]
      }
    ]
  }).exec()
  return res.status(200).json(timetable)
}

export const ManageTimetable = async (req: Request, res: Response) => {
  const timetables = await Timetable.find().exec()
  const iconPath = path.join(
    __dirname,
    '../..',
    'frontend/build/assets/timetable'
  )
  const fileList = await getFileList(iconPath)
  return res.render(path.join(__dirname, '../..', 'views/timetable'), {
    timetable: timetables,
    icons: fileList,
    basePath: iconPath
  })
}

export const UpdateTimetable = async (
  req: Request<Record<string, never>, Record<string, never>, ITimetable>,
  res: Response
) => {
  if (req.body.id === null) return res.status(400).json({})
  const timetable = await Timetable.findOne({ _id: req.body.id })
  if (timetable !== null) {
    timetable.title = req.body.title ?? timetable.title
    timetable.icon = req.body.icon ?? timetable.icon
    timetable.time = req.body.time ?? timetable.time
    await timetable.save()
    return res.status(200).json({})
  }
  return res.status(400).json({})
}

export const CreateTimetableObject = async (req: Request, res: Response) => {
  const timetableItem = new Timetable()
  timetableItem
    .save()
    .then((item) => {
      return res.status(200).json({ _id: item._id })
    })
    .catch((err) => {
      console.log(err)
      return res.status(400).json({ status: 'error' })
    })
}
