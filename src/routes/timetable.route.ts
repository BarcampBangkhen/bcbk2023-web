import { Router } from 'express'
import {
  CreateTimetableObject,
  GetAllTimetable,
  ManageTimetable,
  UpdateTimetable
} from '../controllers/timetable.controller'
import { validate } from '../utils/validateUser'

const router = Router()

router.get('/', GetAllTimetable)

router.get('/manage', ManageTimetable)

router.post('/manage', validate, UpdateTimetable)

router.put('/manage', validate, CreateTimetableObject)

export default router
