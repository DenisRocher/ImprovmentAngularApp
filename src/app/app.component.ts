import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'Curso perfeccionamiento de Angular - Udemy';
  public mostrar_videojuegos: boolean = true;

  ocultarMMostrarVideojuegos() {
    if (this.mostrar_videojuegos == true)
      this.mostrar_videojuegos = false;
    else
      this.mostrar_videojuegos = true;
  }

}
