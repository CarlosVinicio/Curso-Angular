import { Component } from '@angular/core';
import {MoviesService} from "./services/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(private _moviesService: MoviesService){
    this._moviesService.getMostPopularMovies().subscribe(
      response=>{
        console.log(response)
      }
    );
  }

}
