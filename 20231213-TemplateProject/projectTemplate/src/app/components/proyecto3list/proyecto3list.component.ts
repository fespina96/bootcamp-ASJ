import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServEjemploService } from '../../services/serv-ejemplo.service';

@Component({
  selector: 'app-proyecto3list',
  templateUrl: './proyecto3list.component.html',
  styleUrl: './proyecto3list.component.css'
})
export class Proyecto3listComponent {
    personaje:any = [];

    constructor(private _Activatedroute:ActivatedRoute,public miServicio: ServEjemploService){}

    ngOnInit(): void {

        this.personaje = this.miServicio.getPersonajeAPI(this._Activatedroute.snapshot.params['id']).subscribe((data) => {
          console.log(data); //info: {}, results: [{},{},{}]
          this.personaje = data;
        });
        }

}
