import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

// tslint:disable-next-line: no-inferrable-types
  private apiKey: string     = '06c3818d99ffcf20828bcbb8de23f663';
  private urlMoviedb: String = 'https://api.themoviedb.org/3';
  public urlImage = 'http://image.tmdb.org/t/p/w500';

  public movies: any[] = [];

  constructor(private http: HttpClient) { }

  private getURL(request: string, language: string): string {
    return `${this.urlMoviedb}${request}&api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
  }

  getMoviesInTheatres() {
    const datefrom = moment().add(-15, 'days').format('Y-MM-DD');
    const to = moment().format('Y-MM-DD');

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${datefrom}&primary_release_date.lte=${to}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`
    return this.http.jsonp(url, '').pipe(map(res => res ));
  }

  getMostPopularMovies(){
    const request = '/discover/movie?sort_by=popularity.desc';
    return this.http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res ));
  }

  searchMovie( text:string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '').pipe(map(res=> {
      this.movies = res['results'];

     return  res;
    }));
  }

  searchMovieById(id:string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, '').pipe(map(res=> {
      return  res;
    }));
  }
}
