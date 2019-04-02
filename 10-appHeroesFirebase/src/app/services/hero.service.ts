import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HeroInterface } from "../interfaces/hero";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    heroesURL:string = 'https://heroes-app-firebase.firebaseio.com/heroes.json';

  constructor(private http: HttpClient) {
      console.log('Entra en heroService')
  }

  createHero(hero: HeroInterface){
      let body = JSON.stringify(hero);
      let headers = new HttpHeaders({
          'Content-type' : 'application/json'
      })

      //la respuesta al crear devolvera un observable al componente que llama a este servicio
     return  this.http.post(this.heroesURL, body, {headers})
          .pipe(map( response=> {
              return response;
          }))
  }

  getHeroes(){
      return  this.http.get(this.heroesURL)
          .pipe(map( response=> {
              return response;
          }))
  }
}
