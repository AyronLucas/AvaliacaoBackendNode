class ServiceCalculadora {

    Soma(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }
        return num1 + num2
    }

    Mult(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }

        return num1 * num2
    }

    Sub(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }
        return num1 - num2
    }

    Div(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }
        return num1 / num2
    }

    Potencia(num1, num2) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }
        return num1 ** num2
    }

    Raiz(num1) {
        if (isNaN(num1, num2)) {
            throw new Error("Informe somente números")
        }
        return num1 ** 0.5
    }



}

export default new ServiceCalculadora()