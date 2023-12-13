import { Component } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  titulo = "Este es el componente 'contenido'";

  num = 0;
  generarAleatorio = () =>{this.num = Math.floor(Math.random() * 10);}
  incrementar = () =>{this.num++;}
  decrementar = () =>{this.num--;}
}
