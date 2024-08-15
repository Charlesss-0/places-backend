import { getPhotos, getPlaces, getReviews } from '../controllers'
import { getPlacesTestData, getTestPhotos, getTestReviews } from '../controllers/placesController'

import express from 'express'

const router = express.Router()

router.get('/search', getPlaces)
router.get('/search/test', getPlacesTestData)

router.get('/photos', getPhotos)
router.get('/photos/test', getTestPhotos)

router.get('/reviews', getReviews)
router.get('/reviews/test', getTestReviews)

export { router as placesRouter }
