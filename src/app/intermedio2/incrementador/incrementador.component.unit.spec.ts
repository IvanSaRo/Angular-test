import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador Component Unit', () => {

    let component: IncrementadorComponent;

    beforeEach( () => component = new IncrementadorComponent() );
    
    it('El progreso no debe pasar de 100', () => {

        component.progreso = 50;
        component.cambiarValor( 10 );

        expect( component.progreso ).toBe( 60 );



    })


})