import { getPlaces, getTestData } from '@/controllers'

import express from 'express'

const router = express.Router()

router.get('/', getPlaces)

router.get('/test', getTestData)

export { router as placesRouter }
