import { Component, OnInit } from '@angular/core';
import { FormularioAlumnoComponent } from '../formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from '../formulario-seccion/formulario-seccion.component';
@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent implements OnInit {

  constructor(public Nombre: FormularioAlumnoComponent,
    public Apellido: FormularioAlumnoComponent,
    public Run: FormularioAlumnoComponent,
    public Edad: FormularioAlumnoComponent,
    public Fecha: FormularioAlumnoComponent,
    public Numerica: FormularioSeccionComponent,
    public Seccion: FormularioSeccionComponent) { }

  ngOnInit(): void {
  }

}
