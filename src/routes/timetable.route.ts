import { Router } from 'express'
import {
  CreateTimetableObject,
  GetAllTimetable,
  ManageTimetable,
  UpdateTimetable
} from '../controllers/timetable.controller'

const router = Router()

router.get('/', GetAllTimetable)

router.get('/manage', ManageTimetable)

router.post('/manage', UpdateTimetable)

router.put('/manage', CreateTimetableObject)

export default router
