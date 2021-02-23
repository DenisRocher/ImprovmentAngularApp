import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatilla';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];

  constructor() {
    this.marcas = new Array;
    this.zapatillas = [
      new Zapatilla('RunnerFull', 50000, 'Adidas', 'Blue', true),
      new Zapatilla('RunnerSlow', 20000, 'Nike', 'Red', false),
      new Zapatilla('RunnerXtreme', 100000, 'Decathlon', 'Green', false),
      new Zapatilla('RunnerXtreme2', 150000, 'Decathlon', 'Grey', true),
    ];
  }
  
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach(zapatilla => {
      // Para eliminar duplicados de marca
      if (this.marcas.indexOf(zapatilla.marca) < 0) { 
        this.marcas.push(zapatilla.marca);
      }
     });
    console.log(this.marcas);
  };
}
