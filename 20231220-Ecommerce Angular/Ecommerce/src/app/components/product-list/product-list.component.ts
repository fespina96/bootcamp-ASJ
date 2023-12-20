import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  
  constructor(public productService: ProductsServiceService){}

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
  
}
