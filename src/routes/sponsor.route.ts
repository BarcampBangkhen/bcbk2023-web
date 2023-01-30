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

router.get('/manage', ManageSponsors)

router.post('/manage', AddSponsor)

router.patch('/manage', validateSponsor, EditSponsor)

router.delete('/manage', validateSponsor, RemoveSponsor)

export default router
