import { Component } from '@angular/core';
import { Suplemento } from './Suplemento';

@Component({
  selector: 'app-suplementos-lista',
  standalone: false,
  templateUrl: './suplementos-lista.component.html',
  styleUrl: './suplementos-lista.component.scss'
})
export class SuplementosListaComponent {

    suplementos: Suplemento[]=[
       {
      name: "Proteina Ena",
      type: "Proteina",
      cant:"1200g",
      price:25,
      stock:20,
      image:"assets/img/proteEna.webp"
    },
     {
      name: "Creatina Star DOYPACK",
      type: "Creatina",
      cant: "300g",
      price: 32,
      stock:3,
      image:"assets/img/CreaStar_300.webp"
    },
     {
      name: "Citrato de Magnesio(ENA)",
      type: "Magnesio",
      cant: "60 CAPS",
      price:15,
      stock:0,
      image:"assets/img/MagnesioEna.webp"
    }
    ]; 
   
}
