import express from 'express'
import * as pingController from '../../controllers/pingController'
import * as echoController from '../../controllers/echoController'

const router = express.Router()

router.get('/ping', pingController.ping)
router.get('/ping/json', pingController.pingJson)
router.get('/echo', echoController.echo)

export default router
