import { Component, OnInit } from '@angular/core';
import { MsjUsuario } from '../models/msjUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  public msjUsuario: MsjUsuario;

  constructor() {
    this.msjUsuario = new MsjUsuario('', '', '', '', '');
    console.log(this.msjUsuario);
   }

  ngOnInit(): void {
  }

  onSubmit(form:any): void {
    alert('Su solicitud de contacto se ha enviado correctamente');
    //form.reset();
    console.log(this.msjUsuario);
  }
}
