import { Component } from '@angular/core';
import { SuplementosCartService } from '../suplementos-cart.service';
import { Suplemento } from '../suplementos-lista/Suplemento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {


    cartList$: Observable<Suplemento[]>;

    constructor(private cart: SuplementosCartService){
      
      this.cartList$ = cart.cartList.asObservable();
  
    }

}
