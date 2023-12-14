import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-2',
  templateUrl: './proyecto-2.component.html',
  styleUrl: './proyecto-2.component.css'
})
export class Proyecto2Component {
    nameInput:string="";
    urlInput:string="";
    profesionInput:string="";
    listSimpsons:Array<any>=[];

    agregarSimpson = () =>{
        this.listSimpsons.push({
            name:this.nameInput,
            url:this.urlInput,
            profesion:this.profesionInput
        })
    }
}
