import { Router } from 'express'
import {
  GetAllAnsweredQuestions,
  GetAllQuestions,
  PatchQuestion,
  PutQuestion
} from '../controllers/faq.controller'

const router = Router()

router.get('/', GetAllAnsweredQuestions)

router.get('/manage', GetAllQuestions)

router.put('/manage', PutQuestion)

router.patch('/manage', PatchQuestion)

export default router
