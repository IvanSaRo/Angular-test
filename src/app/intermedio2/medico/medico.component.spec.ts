import { Component } from '@angular/core';
import { MedicoComponent } from './medico.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicosService } from '../../espías/medicos.service';
import { HttpClientModule } from '@angular/common/http';




describe("Medico Component", () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicosService ],
            imports: [ HttpClientModule]
        })
        fixture   = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;
    });

    it("Debe crearse el componente", () => {

        expect( component ).toBeTruthy();
    });

    it("Debe devolver el nombre del médico", () => {

        const nombre = "Pedro";
        const res = component.saludarMedico( nombre );

        expect( res ).toContain( nombre );

    });

    


})