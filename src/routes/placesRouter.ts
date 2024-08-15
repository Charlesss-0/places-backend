import { getPlaces, getReviews, getTestData } from '../controllers'

import express from 'express'

const router = express.Router()

router.get('/search', getPlaces)

router.get('/reviews', getReviews)

router.get('/test', getTestData)

export { router as placesRouter }
