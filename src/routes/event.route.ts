import { Router } from 'express'
import {
  GetRulesTwitter,
  SetRulesTwitter,
  StreamTwitter
} from '../controllers/event.controller'

const router = Router()

router.get('/twitter', GetRulesTwitter)

router.post('/twitter', SetRulesTwitter)

export default router
