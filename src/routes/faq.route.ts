import { Router } from 'express'
import {
  GetAllAnsweredQuestions,
  GetAllQuestions,
  PatchQuestion,
  PutQuestion
} from '../controllers/faq.controller'

const router = Router()

router.get('/', GetAllAnsweredQuestions)

router.put('/', PutQuestion)

router.get('/manage', GetAllQuestions)

router.patch('/manage', PatchQuestion)

export default router
