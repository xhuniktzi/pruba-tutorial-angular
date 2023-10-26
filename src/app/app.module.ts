import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar el módulo HTTP
import { AppComponent } from './app.component';
import { ImagenItemComponent } from './imagen-item/imagen-item.component';
import { ImagenesListaComponent } from './imagenes-lista/imagenes-lista.component';
import { ImagenPrincipalComponent } from './imagen-principal/imagen-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenItemComponent,
    ImagenesListaComponent,
    ImagenPrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
