import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleado-caracteristicas',
  templateUrl: './empleado-caracteristicas.component.html',
  styleUrls: ['./empleado-caracteristicas.component.css']
})
export class EmpleadoCaracteristicasComponent implements OnInit {

  @Output() caracteristicas = new EventEmitter<string>();

  addCaracteristica(caracteristica:string) {
    this.caracteristicas.emit(caracteristica);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
