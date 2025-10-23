import ServiceCalculadora from '../services/calculadora.js'

class ControllerCalculadora {

    Soma(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Soma(num1, num2)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }

    Mult(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Mult(num1, num2)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }

    Sub(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Sub(num1, num2)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }

    Div(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Div(num1, num2)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }

    Potencia(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const result = ServiceCalculadora.Potencia(num1, num2)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }

    Raiz(req, res) {
        const num1 = req.body.num1
        const result = ServiceCalculadora.Raiz(num1)
        res.status(200).send({
            msg: "O resultado é " + result,
            data: result,
            error: null
        })
    }
}

export default new ControllerCalculadora()