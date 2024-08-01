import express from 'express'
import { handleDataQuery } from '../controllers'

const router = express.Router()

router.get('/', handleDataQuery)

export default router
