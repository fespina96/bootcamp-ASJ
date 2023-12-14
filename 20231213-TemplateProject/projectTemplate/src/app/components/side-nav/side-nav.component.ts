import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
    
    @Output() selectedProject = new EventEmitter<number>;

    selectProject = (pjId:number) =>{
        this.selectedProject.emit(pjId);
    }
}
