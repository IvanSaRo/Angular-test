import { usuarioLogado } from './booleans';


describe('Pruebas de booleanos', () => {

    it( 'Debe retornar true', () => {

        const res = usuarioLogado();

        expect( res ).toBeTruthy();
    })
})