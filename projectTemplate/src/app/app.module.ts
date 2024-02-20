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
import { HomeComponent } from './components/home/home.component';
import { ListVideoComponent } from './components/videoComponent/list-video/list-video.component';
import { FormVideoComponent } from './components/videoComponent/form-video/form-video.component';
import { DetailVideoComponent } from './components/videoComponent/detail-video/detail-video.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SideNavComponent,
        SideNavContentComponent,
        FooterComponent,
        HomeComponent,
        ListVideoComponent,
        FormVideoComponent,
        DetailVideoComponent
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
