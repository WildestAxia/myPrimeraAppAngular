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

  //empresa = "Tu madre Calva";

  habilitacionCuadro = false;

  usuRegistrado = false;

  textoDeRegistro = "No hay nadie registrado" ;

  constructor() { }

  ngOnInit(): void {
  }




  /*public getEdad(){
    return this.edad;
  }
  */
  getRegistroUsuario(){
    this.usuRegistrado = true;
  }

  setUsuarioRegistrado(event: Event){

    //alert(Event.target);
    if((<HTMLInputElement>event.target).value=="si"){
        this.textoDeRegistro="El usuario se acaba de registrar"
    }else{
      this.textoDeRegistro="No hay nadie registrado"
    }
  }


}
