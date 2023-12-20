import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyecto-4',
  templateUrl: './proyecto-4.component.html',
  styleUrl: './proyecto-4.component.css'
})
export class Proyecto4Component implements OnInit{
    constructor(public userService:UsersService){}

    usuarios:any = [];

    ngOnInit(): void {
        this.list();
    }
    
    // GENERO LISTA
    list(){
        this.userService.getUsers().subscribe(
            (res:any)=>{
                console.log('Respuesta del GET', res);
                this.usuarios = res.data;
            }
        ) 
    }

    //NUEVO USUARIO
    create(form:NgForm){
        //VALIDACION FORM
        if(!form.valid){
            console.log('Formulario invalido');
            return;
        }else{
            const usu = {
                name: form.value.name,
                job: form.value.job
            };
            this.userService
            .createUser(usu)
            .subscribe((res)=> {
                console.log(res);
                form.reset();//LIMPIO DATOS
                this.list();//MUESTRO LISTA NUEVA
            });
        }
    }
    // ELIMINAR USUARIO
    delete(id:number){
        let confirmacion = prompt(`Desea eliminar el usuario ${id}?`);
        if(confirmacion){
            this.userService.deleteUser(id).subscribe((res)=>{
                console.log('Respues de Eliminar', res);
                this.list();
            })
        }
    }

    //MODIFICAR USUARIO
    update(usu:any){
        console.log(usu);
        this.userService.updateUser(usu).subscribe((res)=>{
            console.log('Respuesta update', res);
            this.list();
        })
    }
}
