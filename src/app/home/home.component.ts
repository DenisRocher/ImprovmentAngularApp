import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public identificado: boolean;

  constructor() { 
    this.identificado = false;
  }

  ngOnInit(): void {
  }

  setLogin() {
    this.identificado = true;
  }

  setLogout() {
    this.identificado = false;
  }
}
