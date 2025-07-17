import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suplemento } from './suplementos-lista/Suplemento';
import { tap } from 'rxjs/operators';

const URL = 'https://68787f3963f24f1fdc9e3056.mockapi.io/suplementos'
@Injectable({
  providedIn: 'root'
})
export class SuplementoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Suplemento[]> {
    //fetch ( 'url' , {method: 'GET'}).then
    return this.http.get<Suplemento[]>(URL)
    .pipe(
      tap( (suplementos:Suplemento[]) => suplementos.forEach(suplemento => suplemento.quantity=0))
      
    );
  
  }
}
