import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


    hero:any = {};

  /*Para utilizar un parámetro que viaja por la url(al estilo stateParams en angularjs) tendremos que:
    importar ActivatedRoute
  */
  constructor(private activatedRoute: ActivatedRoute, private _heroesService:HeroesService) {
      // de está forma recibiremos los datos que enviemos mediante la url al estilo stateParams desde el app-routing.module.ts
      this.activatedRoute.params.subscribe(params => {
          this.hero = this._heroesService.getHero(params['id']);
          console.log(this.hero);
      });
  }

  ngOnInit() {
  }

}
