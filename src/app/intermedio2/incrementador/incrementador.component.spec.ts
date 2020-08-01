import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from "@angular/platform-browser";

describe('Incrementador Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {
        // detecta cambio en un elemento 
        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // llama al ciclo de detección de cambios de Angular

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;
    
        expect( elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe mostrar en el input el valor del progreso', async(() => {
        component.cambiarValor(5);
        
        fixture.detectChanges();
        
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query( By.css('input'));
            const elem: HTMLInputElement  = input.nativeElement;
            //lo mismmo que en el elem de arriba pero en dos líneas
          
        expect(elem.valueAsNumber).toBe(55);
        });
      }));

      it('Debe incrementar/reducir en 5 con click a los botones', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null); //simulamos pulsar el primer botón

        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null); 

        expect( component.progreso ).toBe(50);

      });

      it('En el título del componente se ha de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

        fixture.detectChanges();

        expect( elem.innerHTML).toContain('45');
      });



});

