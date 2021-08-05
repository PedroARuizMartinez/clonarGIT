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

  arrayCaracteristica:string[] = [];

  addCaracteristica(c:string) {
    this.arrayCaracteristica.push(c);
    console.log(this.arrayCaracteristica[this.arrayCaracteristica.length-1]);
  }

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
