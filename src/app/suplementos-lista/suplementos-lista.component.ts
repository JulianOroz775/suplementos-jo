import { Component } from '@angular/core';

@Component({
  selector: 'app-suplementos-lista',
  standalone: false,
  templateUrl: './suplementos-lista.component.html',
  styleUrl: './suplementos-lista.component.scss'
})
export class SuplementosListaComponent {

    suplemento= {
      "name": "Proteina Ena",
      "type": "Proteina",
      "price":25,
      "stock":"300g",
      "image":"assets/img/proteEna.webp"
    }
}
