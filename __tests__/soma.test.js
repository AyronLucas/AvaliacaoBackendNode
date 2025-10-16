import { describe, it, expect } from '@jest/globals'
import { Soma } from '../src/controllers/calculadora'

describe("testando soma", () => {
    it('Somando dois números positivos', () => {
        const resultado = Soma(1, 2)

        expect(resultado).toBe(3)
    })

    
    it('Somando dois números negativos', () => {
        const resultado = Soma(-1, -2)

        expect(resultado).toBe(-3)
    })

    
    it('Somando dois números com casa decimal', () => {
        const resultado = Soma(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })

    
    it('Somando um número com zero com outro número', () => {
        const resultado = Soma(0, 2)

        expect(resultado).toBe(2)
    })

    it('Somando zero com outro número', () => {
        const resultado = Soma(1, 0)

        expect(resultado).toBe(1)
    })


})