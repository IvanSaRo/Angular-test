import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './espías/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MedicosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
