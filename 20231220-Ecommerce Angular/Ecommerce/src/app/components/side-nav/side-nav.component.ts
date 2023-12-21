import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../services/products-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{

    categorias = [];

    filterInput = {
        title:'',
        categoryId:'',
        price_min:'',
        price_max:'',
    }


    constructor(public productService: ProductsServiceService, public router:Router){}

    ngOnInit(): void {
        this.listarCategorias();
    }

    listarCategorias(){
        this.productService.getCategories().subscribe(
            (res)=>{
                this.categorias=res;
            }
        )
    }

    filtrarProductos(form:NgForm){
        const filtro = Object.keys(form.value).map(keys=>{
            if(form.value[keys]!=""&&form.value[keys]!=null){
                return keys+"="+form.value[keys]
            }else{
                return ""
            }
        }).filter(keys=>keys!="").join("&");

        this.router.navigateByUrl('/productList/'+filtro);
    }

}
