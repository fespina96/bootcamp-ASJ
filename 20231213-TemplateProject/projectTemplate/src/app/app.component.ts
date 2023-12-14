import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectTemplate';
  selectedProjectParent = 0;

  receiveSelectedProject = (pjId:number) =>{
    this.selectedProjectParent = pjId;
  }
}
