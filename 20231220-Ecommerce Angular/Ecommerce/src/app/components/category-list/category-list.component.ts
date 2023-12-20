import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { CartServiceService } from '../../services/cart-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

    constructor(private productService: ProductsServiceService, private cartService: CartServiceService, private route : ActivatedRoute){}

    products:any = [];

    ngOnInit(): void {
        this.list();
    }

    list(){
        this.productService.getCategories(this.route.snapshot.paramMap.get('idCat')).subscribe(
        (res)=>{
            console.log('Respuesta GET categorias',res);
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
