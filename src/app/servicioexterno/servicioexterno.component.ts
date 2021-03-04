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

  constructor(private _peticionesService: PeticionesService) { 
    this.userId = 1;
    this.resultOK = false;
  };

  ngOnInit(): void {
    this.cargarUsuario();
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

}
