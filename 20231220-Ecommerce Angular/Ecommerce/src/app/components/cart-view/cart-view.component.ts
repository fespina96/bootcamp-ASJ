import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{

    carritoView:Array<any> = []
    totalCarrito:number = 0;
    constructor(private productService:ProductsServiceService){}

    ngOnInit(): void {
        this.cargarCarrito();
    }

    cargarCarrito(){
        this.carritoView = [];
        this.totalCarrito = 0;
        if(localStorage.getItem('carrito')!=null){
            let carritoStorage:Array<any> = JSON.parse(localStorage.getItem('carrito'));
            carritoStorage.forEach(item => {
                this.productService.getProductsById(item.id).subscribe(
                    (res)=>{
                        res.cantidad = item.cantidad;
                        this.carritoView.push(res);
                        this.totalCarrito+=res.price*res.cantidad;
                    }
                )
            });
        }
    }

    borrarItem(idInput:number){
        let carritoABorrar:Array<any> = JSON.parse(localStorage.getItem('carrito'));
        localStorage.setItem('carrito',JSON.stringify(carritoABorrar.filter(item=>item.id!=idInput)));
        this.cargarCarrito();
    }
}
