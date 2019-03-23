import { Component, OnInit } from '@angular/core';
// Para poder trabajar con rutas/redirecciones mediante código tendremos que importar
import { Router } from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private router:Router) {

    }

    ngOnInit() {
    }

    searchHero(word:string) {
        this.router.navigate(['/filter/by/word', word]);
    }

}
