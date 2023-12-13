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

    toggle = (itNum:number) =>{
        if(!this.listEstados.includes(itNum)){
            this.listEstados.push(itNum);
        }else{
            this.listEstados = this.listEstados.filter(item => item !== itNum);
        }
    }

    dltItem = (itNum:number) =>{
        this.listTarea.splice(itNum, 1);
    }
}
