import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY } from "rxjs";

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
    })


});
