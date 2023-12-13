import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-1',
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css',
})
export class Proyecto1Component {  
    tarea:string="";
    listTarea:Array<string> = [];
    estado = true;
    listEstados:Array<number> = [];

    agregarTarea = () =>{
        this.listTarea.push(this.tarea);
    }

    toggle = (num:number) =>{
        if(!this.listEstados.includes(num)){
            this.listEstados.push(num);
        }else{
            this.listEstados = this.listEstados.filter(item => item !== num);
        }
    }
}
