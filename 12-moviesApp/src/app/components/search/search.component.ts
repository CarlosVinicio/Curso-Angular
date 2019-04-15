import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text:string;

  constructor(private _moviesService: MoviesService ) { }

  ngOnInit() {
  }

  searchMovies(){
    this._moviesService.searchMovie(this.text).subscribe()
  }

}
