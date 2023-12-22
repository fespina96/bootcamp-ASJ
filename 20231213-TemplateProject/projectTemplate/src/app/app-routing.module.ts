import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Component } from './components/proyecto-1/proyecto-1.component';
import { HomeComponent } from './components/home/home.component';
import { Proyecto2Component } from './components/proyecto-2/proyecto-2.component';
import { Proyecto3Component } from './components/proyecto-3/proyecto-3.component';
import { Proyecto3listComponent } from './components/proyecto3list/proyecto3list.component';
import { Proyecto4Component } from './components/proyecto-4/proyecto-4.component';
import { Proyecto5Component } from './components/proyecto-5/proyecto-5.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'proyecto1', component: Proyecto1Component },
    { path: 'proyecto2', component: Proyecto2Component },
    { path: 'proyecto3', component: Proyecto3Component },
    { path: 'proyecto3/:id', component: Proyecto3listComponent },
    { path: 'proyecto4', component: Proyecto4Component },
    { path: 'proyecto5', component: Proyecto5Component },

    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
