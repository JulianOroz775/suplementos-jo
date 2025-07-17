import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuplementosListaComponent } from './suplementos-lista/suplementos-lista.component';

import { FormsModule } from '@angular/forms';
import { SuplementosAboutComponent } from './suplementos-about/suplementos-about.component';
import { SuplementosSuplementoComponent } from './suplementos-suplemento/suplementos-suplemento.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SuplementosListaComponent,
    SuplementosAboutComponent,
    SuplementosSuplementoComponent,
    CartComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
