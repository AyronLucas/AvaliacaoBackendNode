import express from "express"
import router from "./routes/calculadora.js"
import { Div, Mult, Soma, Sub } from "./controllers/calculadora.js"
const app = express()
app.use(express.json())

//routes
app.use('/api', router)

app.post('/soma', Soma)
app.post('/mult', Mult)
app.post('/div', Div)
app.post('/sub', Sub)

const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})