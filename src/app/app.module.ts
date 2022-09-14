import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAccesoComponent } from './ComponentesP/formulario-acceso/formulario-acceso.component';
import { FormularioSeccionComponent } from './ComponentesP/formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './ComponentesP/formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './ComponentesP/lista-historial/lista-historial.component';
import { HistorialComponent } from './ComponentesP/historial/historial.component';
import { ListaAlumnosComponent } from './ComponentesP/lista-alumnos/lista-alumnos.component';
import { FormulariosComponent } from './ComponentesP/formularios/formularios.component';
import { AlumnosComponent } from './ComponentesP/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAccesoComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    HistorialComponent,
    ListaAlumnosComponent,
    FormulariosComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
