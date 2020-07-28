import { Formulario } from "./formulario";
import { FormBuilder } from "@angular/forms";


describe( "Formularios", () => {

    let component: Formulario;

    beforeEach( () => {

        component = new Formulario( new FormBuilder);
    });

    it( "El formulario debe tener 2 campos", () => {

        expect( component.form.contains("email")).toBeTruthy();
        expect( component.form.contains("password")).toBeTruthy();
    })

    it( "El mail ha de ser obligatorio", () => {

        const control = component.form.get("email");
        
        control.setValue('');

        expect( control.valid ).toBeFalsy();

        //con esto ponemos sin valor para ver que sea falso y así podamos confirmar que el validador funciona dando un false

    })

    it( "El mail haq de ser un correo válido", () => {

        const control = component.form.get("email");
        
        control.setValue('ivan@gmail.com');

        expect( control.valid ).toBeTruthy();


    })


})