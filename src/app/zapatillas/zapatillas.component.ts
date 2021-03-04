import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.sass'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatilla';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(
    private _zapatillaService: ZapatillaService //Permite inyectar el servicio
                                               //como propiedad del método.
                                                // _aaa "_" previo a servicio 
    )
    {
    this.color = 'white';
    this.miMarca = '';
    this.marcas = new Array;
    this.zapatillas = this._zapatillaService.getZapatillas();
    //console.log(this._zapatillaService.getTest());
    /** this.zapatillas = [
    *  new Zapatilla('RunnerFull', 50000, 'Adidas', 'Blue', true),
    *  new Zapatilla('RunnerSlow', 20000, 'Nike', 'Red', false),
    *  new Zapatilla('RunnerXtreme', 100000, 'Decathlon', 'Green', false),
    *  new Zapatilla('RunnerXtreme2', 150000, 'Decathlon', 'Grey', true)
    *];
    */
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

  getMiMarca() {
    alert('mi marca es ' + this.miMarca);
  };

  addMiMarca() {
    this.marcas.push(this.miMarca);
    console.log(this.marcas);
  }

  dropMarca(index: number) {
    this.marcas.splice(index, 1);
  }

  onBlur() {
    console.log('Fuera del input');
  }

  mostrarMarca() {
    console.log('KeyUp.Enter con la marca ' + this.miMarca);
  }

}
