import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { Proyecto1Component } from './components/proyecto-1/proyecto-1.component';
import { Proyecto2Component } from './components/proyecto-2/proyecto-2.component';
import { HomeComponent } from './components/home/home.component';
import { Proyecto3Component } from './components/proyecto-3/proyecto-3.component';
import { Proyecto3listComponent } from './components/proyecto3list/proyecto3list.component';
import { Proyecto3tableComponent } from './components/proyecto3table/proyecto3table.component';
import { Proyecto4Component } from './components/proyecto-4/proyecto-4.component';
import { Proyecto5Component } from './components/proyecto-5/proyecto-5.component';
import { PipeTemplatePipe } from './pipes/pipe-template.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    SideNavContentComponent,
    FooterComponent,
    Proyecto1Component,
    Proyecto2Component,
    HomeComponent,
    Proyecto3Component,
    Proyecto3listComponent,
    Proyecto3tableComponent,
    Proyecto4Component,
    Proyecto5Component,
    PipeTemplatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
