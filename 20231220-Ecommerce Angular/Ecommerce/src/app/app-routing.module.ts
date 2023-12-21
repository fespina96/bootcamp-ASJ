import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productList/:formInput', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'cartView', component: CartViewComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
