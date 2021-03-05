import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-servicioexterno',
  templateUrl: './servicioexterno.component.html',
  styleUrls: ['./servicioexterno.component.sass'],
  providers: [PeticionesService]

})
export class ServicioexternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public resultOK: any;
  public fecha: any;
  public newUser: any;
  public newUserOK: any;

  constructor(private _peticionesService: PeticionesService) { 
    this.newUserOK = false;
    this.newUser = {
      'name': '',
      'job': ''
    };
  };

  ngOnInit(): void {
    this.userId = 1;
    this.resultOK = false;
    this.cargarUsuario();
    this.fecha = Date.now();

  }

  cargarUsuario() {
    this.user = false;
    this.resultOK = true;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        //console.log(result);
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
        this.resultOK = error.ok;
      }
    );
  }

  onSubmit(form: any) {
    this._peticionesService.addUser(this.newUser).subscribe(
      response => {
        //console.log(result);
        console.log(response);
        this.newUserOK = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
        this.newUserOK = false;
      }
    );
  }

}
