import { describe, it, expect } from '@jest/globals'
import ServiceController from '../src/services/calculadora.js'

describe("testando potência", () => {

    it("potenciação", () => {
        const resultado = ServiceController.Potencia(10, 2)

        expect(resultado).toBe(100)
    })


})