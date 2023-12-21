import { Component } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../../services/cart-service.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  constructor(public productService: ProductsServiceService, public route : ActivatedRoute, public cartService: CartServiceService){}

  id:any = "";

  product:any = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  loadProduct(){
    this.productService.getProductsById(this.id).subscribe(
      (res)=>{
        console.log('Respuesta GET producto',res);
        this.product = res;
      }
      );
  }

  agregarAlCarrito(id:number,cantidad:number){
    // let item = "";
    // this.productService.getProductsById(id).subscribe((res)=>item=res);
    this.cartService.addProdToCart(id,cantidad);
    }
}
