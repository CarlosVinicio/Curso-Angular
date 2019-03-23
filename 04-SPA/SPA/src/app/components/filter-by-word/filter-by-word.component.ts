import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-filter-by-word',
  templateUrl: './filter-by-word.component.html',
  styleUrls: ['./filter-by-word.component.css']
})
export class FilterByWordComponent implements OnInit {

  private heroes:any[] = null;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { }

  ngOnInit() {
      console.log('filterComponent OnInit');
      this.activatedRoute.params.subscribe(params => {
          this.heroes = this._heroesService.getHeroByWord(params['word']);
      });
  }




}
