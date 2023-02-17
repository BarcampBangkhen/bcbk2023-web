import { Router } from 'express'
import { preventManualAccess } from '../utils/ApiMiddleware'
import { GetAllSponsors } from '../controllers/sponsor.controller'
import { validateSponsor } from '../utils/validateUser'

const router = Router()

router.get('/', preventManualAccess, GetAllSponsors)

export default router
