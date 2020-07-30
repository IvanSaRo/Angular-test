import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../espías/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  
  constructor(public _medicoService: MedicosService) { }

  ngOnInit(): void {
  }

  saludarMedico( nombre: string){

    return `Hola ${ nombre }`;
  }


  getMedicos(){

    this._medicoService.getMedicos()
        .subscribe( medicos => this.medicos = medicos);
  }

}
