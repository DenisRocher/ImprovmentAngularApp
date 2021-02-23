import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string = '';
  public descripcion: string = '';
  public colorBackground: string = 'blue'
  public config;
  public mostrar_videojuegos: boolean = true;

  constructor() {
    this.config = Configuracion;
    //this.title = Configuracion.titulo;
    //this.descripcion = Configuracion.descripcion;
    //this.colorBackground = Configuracion.color;
    
  }

  ocultarMMostrarVideojuegos() {
    if (this.mostrar_videojuegos == true)
      this.mostrar_videojuegos = false;
    else
      this.mostrar_videojuegos = true;
  }

}
