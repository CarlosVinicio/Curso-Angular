import { Component, OnInit } from '@angular/core';

// importamos el servicio que queremos usar en este component,
// Para poder usar la interfaz que se encuentra en el servicio tendre que importarlo
// en el mismo import, si fuese una interfaz independiente tendriamos que importalo
// en un import independiente
import { HeroesService, Hero } from '../../services/heroes.service';

// Para poder trabajar con rutas/redirecciones mediante código tendremos que importar
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];  

  /*
    Para poder utilizar el servicio tenemos que pasarlo como
    parametro a constructr de nuestra clase
    Para usar Router tendremos que inyectarlo en el 
  */
  constructor(private _heroesService: HeroesService, private router:Router) {
    
  }
  
  // ngOninit se iniciara despues de el constructor
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.router);
  }
  
  // function
  viewHero(index:number) {
    this.router.navigate(['/hero', index]);
  }


}

