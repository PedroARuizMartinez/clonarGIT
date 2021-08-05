export class Empleado {

  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  salario:number = 0;

  /**
   * Método constructor
   * @param nombre Parámetro nombre
   * @param apellido Parámetro apellido
   * @param cargo Parámetro cargo
   * @param salario Parámetro salario
   */
  constructor(nombre:string, apellido:string, cargo:string, salario:number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }

}
