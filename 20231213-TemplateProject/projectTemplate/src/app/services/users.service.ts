import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  URL_API = 'https://reqres.in/api/users';

  datosUsuario:any = {
    id: -1,
    name: "",
    job: ""
  }

  public getUsers():Observable<any>{
    return this.http.get(this.URL_API);
  }

  public createUser(usuario:any):Observable<any>{
    return this.http.post(this.URL_API,usuario);
  }

  public deleteUser(id:number):Observable<any>{
    return this.http.delete(this.URL_API+"/"+id)
  }

  public updateUser(usuario:any):Observable<any>{
    return this.http.put(this.URL_API+"/"+usuario.id,usuario);
  }
}
