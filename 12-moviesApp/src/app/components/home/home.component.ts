import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesInTheatres:any;
  mostPopularMovies:any;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMoviesInTheatres()
      .subscribe(data=>{

        this.moviesInTheatres = data;
        console.log('data', data)
      });
// xomentario desde movil this.getelent
    this._moviesService.getMostPopularMovies()
      .subscribe(data=>{
        this.mostPopularMovies = data;
        console.log('data', data)
      });

  }


}
