import { Injectable } from '@angular/core';
import { Suplemento } from './suplementos-lista/Suplemento';
import { BehaviorSubject } from 'rxjs';


/* 
 * Maneja la logica del carrito 
 * 
 * */

@Injectable({
  providedIn: 'root'
})

export class SuplementosCartService {

  private _cartList: Suplemento[] = [];
  
  cartList: BehaviorSubject<Suplemento[]> = new BehaviorSubject<Suplemento[]>([]);


  constructor() { }

  addToCart(suplemento: Suplemento){
    const item = this._cartList.find((v1) => v1.name === suplemento.name);
    
    if (!item) {
      this._cartList.push({...suplemento});
    } else{

      item.quantity += suplemento.quantity;
    }
    
    console.log(this._cartList);
    
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }
  
}
