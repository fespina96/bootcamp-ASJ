import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListVideoComponent } from './components/videoComponent/list-video/list-video.component';
import { DetailVideoComponent } from './components/videoComponent/detail-video/detail-video.component';
import { FormVideoComponent } from './components/videoComponent/form-video/form-video.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'video',
        children: [
            { path: '', component: ListVideoComponent },
            { path: ':id', component: DetailVideoComponent },
            { path: 'formVideo', component: FormVideoComponent },
        ],
    },



    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
