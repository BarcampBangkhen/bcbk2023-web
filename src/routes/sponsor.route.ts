import { Router } from 'express'
import { preventManualAccess } from '../utils/ApiMiddleware'
import {
  AddSponsor,
  EditSponsor,
  GetAllSponsors,
  ManageSponsors,
  RemoveSponsor
} from '../controllers/sponsor.controller'
import { validateSponsor } from '../utils/validateUser'

const router = Router()

router.get('/', preventManualAccess, GetAllSponsors)

export default router
