import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('RunnerFull', 50000, 'Adidas', 'Blue', true),
      new Zapatilla('RunnerSlow', 20000, 'Nike', 'Red', false),
      new Zapatilla('RunnerXtreme', 100000, 'Decathlon', 'Green', false),
      new Zapatilla('RunnerXtreme2', 150000, 'Decathlon', 'Grey', true)
      ];
  }

  getTest(): string{
    return ('Prueba del servicio OK');
  }

  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }

}