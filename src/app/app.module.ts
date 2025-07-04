import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuplementosListaComponent } from './suplementos-lista/suplementos-lista.component';
import { FormsModule } from '@angular/forms'; // 👉 Agregá esto


@NgModule({
  declarations: [ 
    AppComponent,
    SuplementosListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
