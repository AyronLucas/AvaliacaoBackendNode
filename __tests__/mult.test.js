import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora.js'


describe("testando multiplicação", () => {

    it("multiplicando dois números", () => {
        const resultado = ServiceCalculadora.Mult(3, 2)

        expect(resultado).toBe(6)
    })
})


