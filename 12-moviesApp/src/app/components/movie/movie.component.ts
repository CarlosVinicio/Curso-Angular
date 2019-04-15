import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {

    movie:any;
    backTo:string;

    constructor(private  router: ActivatedRoute ,private _movieService: MoviesService) {


    this.router.params.subscribe(params=>{
      this._movieService.searchMovieById(params['id']).subscribe( data=>{
          this.backTo = params['page'];
          this.movie = data;
        }
      )
    });

    console.log('entra en movie')
  }

  ngOnInit() {
  }

}
