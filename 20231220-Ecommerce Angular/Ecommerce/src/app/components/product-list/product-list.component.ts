import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
    constructor(public productService: ProductsServiceService, private cartService: CartServiceService){}

    products:any = [];

    ngOnInit(): void {
        this.list();
    }

    list(){
        this.productService.getProducts().subscribe(
        (res)=>{
            console.log('Respuesta GET productos',res);
            this.products = res;
        }
        );
    }

    agregarAlCarrito(id:number,cantidad:number){
        // let item = "";
        // this.productService.getProductsById(id).subscribe((res)=>item=res);
        this.cartService.addProdToCart(id,cantidad);
    }
  
}
