import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora.js'


describe("testando subtração", () => {
    it('subtraindo dois números ', () => {
        const resultado = ServiceCalculadora.Sub(2, 3)

        expect(resultado).toBe(-1)
    })

})