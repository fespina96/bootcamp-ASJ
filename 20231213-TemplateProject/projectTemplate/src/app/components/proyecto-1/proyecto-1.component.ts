import { state } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-1',
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css',
})
export class Proyecto1Component {  
    tareaInput:string="";
    dateInput:any="";
    selectVal:string="activos";
    listTarea:Array<any> = [];
    listTareaDeleted:Array<any> = [];

    agregarTarea = () =>{
        let templateTarea = {
            description:this.tareaInput,
            date:this.dateInput,
            estado:false,
        }
        this.listTarea.push(templateTarea);
    }

    toggle = (itNum:number) =>{
            this.listTarea[itNum].estado = !this.listTarea[itNum].estado;
    }

    dltItem = (itNum:number) =>{
        this.listTareaDeleted.push(this.listTarea[itNum]);
        this.listTarea.splice(itNum, 1);
    }

    dltItemDeleted = (itNum:number) =>{
        if(prompt("Esta seguro que desea eliminar este elemento de forma permanente?(SI/NO)")=="SI"){
            this.listTareaDeleted.splice(itNum, 1);
        }else{
            alert("Eliminación cancelada!");
        }
        
    }
}
