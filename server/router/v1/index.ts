import express from 'express'
import * as pingController from '../../controllers/pingController'

const router = express.Router()

router.get('/ping', pingController.ping)
router.get('/ping/json', pingController.pingJson)

export default router
