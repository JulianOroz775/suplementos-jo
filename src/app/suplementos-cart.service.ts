import { Injectable } from '@angular/core';
import { Suplemento } from './suplementos-lista/Suplemento';


/* 
 * Maneja la logica del carrito 
 * 
 * */

@Injectable({
  providedIn: 'root'
})
export class SuplementosCartService {

  cartList: Suplemento[] = [];

  constructor() { }

  addToCart(suplemento: Suplemento){
    const item = this.cartList.find((v1) => v1.name === suplemento.name);
    
    if (!item) {
      this.cartList.push({...suplemento});
    } else{

      item.quantity += suplemento.quantity;
    }
    
    console.log(this.cartList);
  }
  
}
