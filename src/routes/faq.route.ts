import { Request, Response, Router } from 'express'
import {
  GetAllAnsweredQuestions,
  GetAllQuestions,
  PatchQuestion,
  PutQuestion
} from '../controllers/faq.controller'
import { preventManualAccess } from '../utils/ApiMiddleware'
import { validate } from '../utils/validateUser'

const router = Router()

router.get('/', preventManualAccess, GetAllAnsweredQuestions)

router.put('/', preventManualAccess, PutQuestion)

router.get('/manage', validate, GetAllQuestions)

router.patch('/manage', PatchQuestion)

export default router
