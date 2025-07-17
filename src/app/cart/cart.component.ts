import { Component } from '@angular/core';
import { SuplementosCartService } from '../suplementos-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

    constructor(private cart: SuplementosCartService){
      
    }
}
