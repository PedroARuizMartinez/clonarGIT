import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css']
})
export class EmpleadoCaracteristicasComponent implements OnInit {

  //Elemento Output con nombre 'caracteristicasEmpleados' y que crea un 'nuevo (new)' objeto de tipo EventEmitter que a su vez es de tipo string
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  /**
   * Método que acompaña al decorador '@Output' y que añade característica con un valor de tipo string pasado por parámetro
   * Ese valor se asigna el objeto 'caracteristicasEmpleados', se emite (emit) pasandole como valor la variable 'value'
   * @param value Parámetro o valor de tipo string
   */
  addCaracteristicaEmpleado(value:string) {
    this.caracteristicasEmpleados.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
