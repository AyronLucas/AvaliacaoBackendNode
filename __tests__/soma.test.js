import { describe, it, expect } from '@jest/globals'
import ServiceCalculadora from '../src/services/calculadora'

describe("testando soma", () => {
    it('Somando dois números positivos', () => {
        const resultado = ServiceCalculadora.Soma(2, 3)

        expect(resultado).toBe(5)
    })


})