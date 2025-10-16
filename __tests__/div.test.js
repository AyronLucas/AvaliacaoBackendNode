import { describe, it, expect } from '@jest/globals'
import { Div } from '../src/controllers/calculadora'

describe("testando divisão", () => {

    it("dividindo dois números", () =>{
        const resultado = Div (4,2)

        expect(resultado.toBe(2))
    })

        it("dividindo dois números negativos", () =>{
        const resultado = Div (-4,-2)

        expect(resultado.toBe(2))
    })

    
})