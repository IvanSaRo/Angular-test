import { mensaje } from './string'


describe( 'Pruebas de strings', () => {

    it( 'Debe devolver un string', () => {

        const  resp = mensaje("Iván");

        expect( typeof resp ).toBe('string');
        // Espera que sea un string


    })

    it( 'Debe devolver un saludo con el nombre enviado', () => {

        const nombre = "Pedro"
        const  resp = mensaje( nombre );

        expect( resp ).toContain( nombre );
        // Espera que lo que se devuelva contenga la const nombre


    })

})