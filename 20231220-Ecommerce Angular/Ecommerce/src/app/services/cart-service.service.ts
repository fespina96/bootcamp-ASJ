import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

    constructor() { }

    getCarrito(){
        return JSON.parse(localStorage.getItem('carrito')!) || [];
    }

    addProdToCart(id:any,cantidad:number){
        const cart = this.getCarrito();
        let item = cart.find((i:any)=>i.id==id)
        item? item.cantidad += cantidad : cart.push({id:id,cantidad:cantidad});
        localStorage.setItem('carrito',JSON.stringify(cart));
    }

    getCarritoLength(){
        return JSON.parse(localStorage.getItem('carrito')!).length || 0;
    }
}
