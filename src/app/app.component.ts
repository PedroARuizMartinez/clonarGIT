import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Listado de Empleados";

  //Variables de los campos del formulario
  cNombre:string = "";
  cApellido:string = "";
  cCargo:string = "";
  cSalario:number = 0;

  


  empleados:Empleado[] = [
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fernandez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500)
  ];

  registrarEmpleado() {
    let e = new Empleado(this.cNombre, this.cApellido, this.cCargo, this.cSalario);
    this.empleados.push(e);
  }

  constructor() {
    
  }

}
