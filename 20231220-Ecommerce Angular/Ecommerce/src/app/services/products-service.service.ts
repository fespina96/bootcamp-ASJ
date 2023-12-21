import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  URL_API="https://api.escuelajs.co/api/v1/";

  getProducts():Observable<any>{
    return this.http.get(this.URL_API+'products');
  }

  getProductsById(id:any):Observable<any>{
    return this.http.get(this.URL_API+'products/'+id);
  }

  getCategories():Observable<any>{
    return this.http.get(this.URL_API+'categories');
  }

  filtrarProductosService(filtroString:any){
    return this.http.get(this.URL_API+'products/?'+filtroString);
  }
}
