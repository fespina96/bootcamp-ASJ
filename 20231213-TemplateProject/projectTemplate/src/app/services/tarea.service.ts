import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
    providedIn: 'root'
})
export class TareaService {
    private tareaUrl = 'http://localhost:8080/tarea'

    constructor(private http: HttpClient) { }

    getTareaList():Observable<any>{
        return this.http.get(this.tareaUrl);
    }

    addNewTarea(tarea:Tarea):Observable<any>{
        return this.http.post(this.tareaUrl,tarea);
    }

    toggleTarea(id:number):Observable<any>{
        return this.http.get(this.tareaUrl+"/"+(id+1)+"/toggle");
    }

}
