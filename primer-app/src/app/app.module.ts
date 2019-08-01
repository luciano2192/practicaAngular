import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteImagenComponent } from './componente-imagen/componente-imagen.component';
import { ComponenteParrafoComponent } from './componente-parrafo/componente-parrafo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteImagenComponent,
    ComponenteParrafoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
