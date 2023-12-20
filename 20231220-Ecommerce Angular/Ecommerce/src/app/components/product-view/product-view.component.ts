import { Component } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  constructor(public productService: ProductsServiceService, public route : ActivatedRoute){}

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
}
