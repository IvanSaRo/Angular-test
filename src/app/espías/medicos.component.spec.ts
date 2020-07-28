import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError } from "rxjs";

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);
    
    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init debe cargar los médicos', () => {
        const medicos = ['Juan', 'Marta', "Paula" ]

        spyOn( servicio, 'getMedicos').and.callFake( () => {


            return from ([ medicos ]);
        })
        
        componente.ngOnInit();
        expect ( componente.medicos.length ).toBeGreaterThan(0);
    });

    it( 'El método ha de llamar al servidor para agregarun médico', () => {
        const spy = spyOn( servicio, 'agregarMedico').and.callFake( medico => {

            return EMPTY;
        })

        componente.agregarMedico();

        expect( spy ).toHaveBeenCalled();
    });

    it( 'Tiene que agregar un médico al array de médicos', () => {
        const medico = { id: 1, nombre: "Juan"};

        spyOn(servicio, 'agregarMedico')
            .and.returnValue( from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.findIndex( i => i.id = medico.id)).toBeGreaterThanOrEqual(0)

    });

    it( 'Si no se añade el médico la propiedad mensajeErro ha de ser igual al error en el servicio', () => {

        const miError = 'No se pudo agregar al médico';

        spyOn( servicio, 'agregarMedico')
            .and.returnValue( throwError(miError));

        componente.agregarMedico();

        expect( componente.mensajeError).toBe( miError );
        
    });

    it('Debe de llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm').and.returnValue(true);
        //este spyOn salta el cartel del confirm que está en la funcion borrarMedico

        const spy = spyOn(servicio, 'borrarMedico')
                        .and.returnValue( EMPTY);

        componente.borrarMedico('1');

        expect( spy ).toHaveBeenCalledWith('1');
    });

    it('NO debe de llamar al servidor para borrar un médico', () => {

        spyOn( window, 'confirm').and.returnValue(false);
        //este spyOn salta el cartel del confirm que está en la funcion borrarMedico

        const spy = spyOn(servicio, 'borrarMedico')
                        .and.returnValue( EMPTY); //no tiene efecto al dar false en el confirm

        componente.borrarMedico('1');

        expect( spy ).not.toHaveBeenCalledWith('1');
    })


});
