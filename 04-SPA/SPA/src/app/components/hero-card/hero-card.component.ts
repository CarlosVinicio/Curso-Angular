// Input nos permitira recibir datos desde un componente padre a un componente hijo.
// Output junto con EventEmmitter nos permitirá enviar datos y  emitir un evento del componente hijo al componente padre
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

    // El decorador @Input delante de la propiedad indica que este dato viene desde un componente
    // padre. Ahora en el selector html 'app-hero-card' podremos pasarle los datos que queramos los cuales son propiedad
    // del componente padre ejemplo:

    /*
        // Componente-padre podria tener un dato que le podriamos pasar al hijo.

        <div class="card-columns"> --> este seria el html del componente padre

            -->aqui le estamos enviando al componente hijo la variable hero
            <app-hero-card [hero]="foo"  *ngFor="let foo of heroes; let i = index> </app-hero-card>

        </div>
    */

    @Input() hero:any = {};
    @Input() index:number;

    // Este será el evento que el componente padre este "escuchando", es decir cuando el componente hijo quiera comunicarse con el padre emitira este evento
    // lo que se pone entre <> quiere decir que es o que va a emitir mi evento hacia el padre
    @Output() heroSelected: EventEmitter<number>;

    // Siempre hay que inicializar el EventEmitter en el constructor de componente hijoç
    constructor(private route:Router) {
        this.heroSelected = new EventEmitter<number>();
    }

    ngOnInit() {
    }

    viewHero() {
        // aqui emitimos nuestro evento hacia el padre
        this.heroSelected.emit(this.index);
    }

}
