import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormularioSeccionComponent } from '../formulario-seccion/formulario-seccion.component';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent implements OnInit {

  constructor(public Numerica: FormularioSeccionComponent,
              public Seccion: FormularioSeccionComponent) {

      Run: String;
      Nombre: String;
      Apellido: String;
      Edad: Number;
      Fecha: Date;

   }

  ngOnInit(): void {
  }

}
