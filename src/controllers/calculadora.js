
export const Soma = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = num1 + num2
    res.status(200).send({
        msg: "O resultado é " + result,
        data: result,
        error: null
    })
}

export const Mult = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = num1 * num2
    res.status(200).send({
        msg: "O resultado é " + result,
        data: result,
        error: null
    })
}

export const Sub = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = num1 - num2
    res.status(200).send({
        msg: "O resultado é " + result,
        data: result,
        error: null
    })
}

export const Div = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = num1 / num2
    res.status(200).send({
        msg: "O resultado é " + result,
        data: result,
        error: null
    })
}


export const Op = (req, res) => {
    console.log("Digite a operação que deseja")
    console.log("Soma")
    console.log("Multiplicação")
    console.log("Divisão")
    console.log("Subtração")


}
