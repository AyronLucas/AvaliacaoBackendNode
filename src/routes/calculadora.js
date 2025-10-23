import express from 'express'
import ControllerCalculadora from '../controllers/calculadora.js'



const router = express.Router()

router.post('/soma', ControllerCalculadora.Soma)
router.post('/mult', ControllerCalculadora.Mult)
router.post('/div', ControllerCalculadora.Div)
router.post('/sub', ControllerCalculadora.Sub)
router.post('/potencia', ControllerCalculadora.Potencia)
router.post('/raiz', ControllerCalculadora.Raiz)

export default router