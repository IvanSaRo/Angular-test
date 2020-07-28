import { incrementar } from './numbers';

describe('Pruebas de números', () => {

    it('Debe devolver 100 si el número introducido es mayor a 100', () => {


        const resp = incrementar( 300 );
        

        expect( resp ).toBe(100);
    })

    it('Debe devolver el número ingresado + 1 si el número introducido es inferior a 100', () => {


        const resp = incrementar( 50 );
        

        expect( resp ).toBe(51);
    })
})