import { Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from "../services/movies.service";

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  constructor(private _moviService: MoviesService){}

  transform(value: any, args?: any): any {
    let url =  (value.poster_path) ? value.poster_path : value.backdrop_path;
    return `${this._moviService.urlImage}${url}`;
  }

}
