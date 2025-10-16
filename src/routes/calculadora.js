import express from 'express'
import { Div, Mult, Soma, Sub } from '../controllers/calculadora.js'



const router = express.Router()

router.post('/soma', Soma)
router.post('/mult', Mult)
router.post('/div', Div)
router.post('/sub', Sub)

export default router