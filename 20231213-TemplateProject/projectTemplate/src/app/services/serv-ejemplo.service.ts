import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServEjemploService {

    constructor(private http: HttpClient) {
        console.log('Servicio funcionando');
      }
    
      public getDataAPI() {
        return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
      }
    
      public getPersonajeAPI(id: number) {
        //Un personaje particular
        return this.http.get('https://rickandmortyapi.com/api/character/' + id);
      }
}
