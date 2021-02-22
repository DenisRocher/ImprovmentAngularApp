import { Component, OnInit, DoCheck , OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'Componente de Videojuego';
        this.listado = 'Listado de los juegos más populares';

        console.log('Se ha cargado el componente de VideoJuego');
    }

    ngOnInit() {
        console.log('OnInit Ejecutado!!');
    }

    ngDoCheck() {
        console.log('DoCheck Ejectuado...');
    }

    ngOnDestroy() {
        console.log('OnDestroy ejecutado');
    }
    cambiarTitulo() {
        this.titulo = 'Nuevo titulo del componente';
    }
    
}
