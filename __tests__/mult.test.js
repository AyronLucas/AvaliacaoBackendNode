import { describe, it, expect } from '@jest/globals'
import { Mult } from '../src/controllers/calculadora'

describe("testando mult", () => {

    it("multiplicando dois números", () =>{
        const resultado = Mult (2,3)

        expect(resultado.toBe(6))
    })

    it("multiplicando dois números, com o segundo número sendo zero", () =>{
        const resultado = Mult (2,0)

        expect(resultado.toBe(0))
    })

    it("multiplicando dois números, com o primeiro número sendo zero", () =>{
        const resultado = Mult (0, 2)

        expect(resultado.toBe(0))
    })
})

