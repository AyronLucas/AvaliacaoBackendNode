import { describe, it, expect } from '@jest/globals'
import ServiceController from '../src/services/calculadora.js'

describe("testando divisão", () => {

    it("dividindo dois números", () => {
        const resultado = ServiceController.Div(10, 2)

        expect(resultado).toBe(5)
    })


})