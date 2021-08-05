import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() indice:number;


  //Se añade un array que almacenará las características de cada empleado
  arrayCaracteristicas:string[] = [];

  /**
   * Método que añade características al array (arrayCaracteristicas). Se vinculará con el '@Output' en el template
   * @param nuevaCaracteristica Parámetro de tipo string que añade característica a un empleado
   */
  addCaracteristicaEmpleado(nuevaCaracteristica:string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
