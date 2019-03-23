import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre: String = 'Carlos';
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    PI = Math.PI;
    valor = 0.234;
    hero = {

        nombre: 'Carlos',
        ciudad: 'Madrid'

    };

    urlVideo = 'gJRGkvNqrY4';

    activate = false;

}

