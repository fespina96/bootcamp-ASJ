import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-proyecto-1',
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css',
})
export class Proyecto1Component implements OnInit{  
    
    constructor(private servicioTarea:TareaService){}

    tarea:Tarea = {
        id:"",
        nombre:"",
        descripcion:"",
        estado:true
    }

    selectVal = "";

    selectValId = "";

    listTarea:any = [];

    listTareaDeleted:Array<Tarea> = [];

    ngOnInit(): void {
        this.cargarLista();
    }

    agregarTarea = () =>{
        this.servicioTarea.addNewTarea(this.tarea).subscribe(
            (res)=> {res.error?console.log("Error "+res.error):console.log("Data posted successfully");},
            (complete)=> {this.cargarLista();}
        )
        this.cargarLista();
    }

    toggle = (itNum:number) =>{
        this.servicioTarea.toggleTarea(itNum).subscribe(
            (res)=> {res.error?console.log("Error "+res.error):console.log("Data updated successfully");},
            (complete)=> {this.cargarLista();}
        )
    }

    dltItem = (itNum:number) =>{
        
    }

    dltItemDeleted = (itNum:number) =>{

    }

    cargarLista(){
        this.listTarea=this.servicioTarea.getTareaList().subscribe(
            (res) => {console.log(res);this.listTarea = res}
        )
    }

    editarTarea(){

    }

    changeSelect(){
        this.tarea.nombre = this.listTarea.get(this.selectValId).nombre;
        this.tarea.descripcion = this.listTarea.get(this.selectValId).descripcion;
    }
}
