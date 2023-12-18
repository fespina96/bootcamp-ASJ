import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto3table',
  templateUrl: './proyecto3table.component.html',
  styleUrl: './proyecto3table.component.css'
})
export class Proyecto3tableComponent {
    @Input() personajesInput:any = [];

    personajes = this.personajesInput;
}
