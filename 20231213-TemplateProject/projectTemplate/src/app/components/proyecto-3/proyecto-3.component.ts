import { Component, OnInit } from '@angular/core';
import { ServEjemploService } from '../../services/serv-ejemplo.service';
@Component({
  selector: 'app-proyecto-3',
  templateUrl: './proyecto-3.component.html',
  styleUrl: './proyecto-3.component.css'
})
export class Proyecto3Component implements OnInit{
    personajes: any = [];

    constructor(public miServicio: ServEjemploService) {}

    ngOnInit(): void {

    this.personajes = this.miServicio.getDataAPI().subscribe((data) => {
      console.log(data); //info: {}, results: [{},{},{}]
      this.personajes = data;
    });
  }
}
