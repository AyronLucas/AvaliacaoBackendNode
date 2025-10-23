import { describe, it, expect } from '@jest/globals'
import ServiceController from '../src/services/calculadora.js'

describe("testando raiz", () => {

    it("raiz quadrada", () => {
        const resultado = ServiceController.Raiz(49)

        expect(resultado).toBe(7)
    })


})