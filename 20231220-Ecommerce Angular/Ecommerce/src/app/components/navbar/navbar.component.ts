import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  carrito:any = []

  ngOnInit(): void {
    this.actualizarCarrito();
  }

  actualizarCarrito(){
    if(localStorage.getItem('carrito')!=null){
      this.carrito = JSON.parse(localStorage.getItem('carrito'));
    }
  }
}
