import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

    constructor(private cartService:CartServiceService){}

    carritoLength:number = 0;
    
    ngOnInit(): void {
        this.cargarCarrito();
    }

    cargarCarrito(){
        if(localStorage.getItem('carrito')!=null){
            this.carritoLength = this.cartService.getCarritoLength();
        }else{
            this.carritoLength = 0;
        }
    }
}
