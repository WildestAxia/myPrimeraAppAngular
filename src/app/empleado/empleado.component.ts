import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {


  nombre = "David";
  apellido = "Martinez";
  edad = 18;
  empresa = "Tu madre Calva";
  constructor() { }

  ngOnInit(): void {
  }

  /*public getEdad(){
    return this.edad;
  }
  */

}
