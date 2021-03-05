import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http"; //Módulo para peticines AJAX
// FECHAS EN FORMATO ES
import localeEsCl from "@angular/common/locales/es-CL";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsCl, 'es-CL');


import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ServicioexternoComponent } from './servicioexterno/servicioexterno.component';
import { CalculadorPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ServicioexternoComponent,
    CalculadorPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
