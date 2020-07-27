import { mensaje } from './string'


describe( 'Pruebas de strings', () => {

    it( 'Debe devolver un string', () => {

        const  resp = mensaje("Iván");

        expect( typeof resp ).toBe('string');


    })

})