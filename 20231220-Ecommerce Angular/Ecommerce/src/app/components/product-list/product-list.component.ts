import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { CartServiceService } from '../../services/cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
    constructor(public productService: ProductsServiceService, private cartService: CartServiceService, private route: ActivatedRoute){}

    products:any = [];

    ngOnInit(): void {
        this.list();
    }

    list(){
        this.route.paramMap.subscribe((res)=>{
            const filterInfo = res.get('formInput');
            console.log(filterInfo);
            if (filterInfo!=null){
                this.productService.filtrarProductosService(filterInfo).subscribe((res)=>{
                    this.products = res;
                });
            }else{
                this.productService.getProducts().subscribe(
                    (res)=>{
                        console.log('Respuesta GET productos',res);
                        this.products = res;
                    });
            }
        });
    }

    agregarAlCarrito(id:number,cantidad:number){
        // let item = "";
        // this.productService.getProductsById(id).subscribe((res)=>item=res);
        this.cartService.addProdToCart(id,cantidad);
    }
  
}
