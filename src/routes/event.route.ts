import { Router } from 'express'
import { SetRulesTwitter, StreamTwitter } from '../controllers/event.controller'

const router = Router()

router.get('/twitter', SetRulesTwitter)

export default router
