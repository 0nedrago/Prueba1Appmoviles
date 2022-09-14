import { Component, OnInit } from '@angular/core';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from '../formulario-seccion/formulario-seccion.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {

  constructor( public Nombre: FormularioAlumnoComponent,
               public Apellido: FormularioAlumnoComponent,
               public Run: FormularioAlumnoComponent,
               public Edad: FormularioAlumnoComponent,
               public Numerica: FormularioSeccionComponent,
               public Seccion: FormularioSeccionComponent) {


   }




  ngOnInit(): void {
  }

}
