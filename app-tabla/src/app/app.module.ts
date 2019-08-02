import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAutoComponent } from './componente-auto/componente-auto.component';
import { FormsModule } from '@angular/forms';
import { ComponenteDetallesComponent } from './componente-detalles/componente-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAutoComponent,
    ComponenteDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
