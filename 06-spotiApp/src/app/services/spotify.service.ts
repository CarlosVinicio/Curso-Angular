import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   url: string = 'BQDe651pIGRxitn5VVQG5Emz-tAjGsJKHyZmQHZAHXa1Dvmy7oAYbTJmMvzkneyYSoiMHq_zvlepun8IbTs';
   prefix: string =  'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {
     console.log('Spotify service listo para ser usado');
  }

  getHeader () {
   const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.url}`
   });

   return headers;
  }

  getNewReleases() {
   const headers = this.getHeader();

     return this.http.get(`${this.prefix}browse/new-releases`, {headers})
     .pipe( map( data => {
         return data['albums'].items;
    } ));
  }

  getArtists(artist: string) {
      const headers = this.getHeader();
      return this.http.get(`${this.prefix}search?q=${ artist }&type=artist&limit=10`, {headers})
      .pipe( map( data => {
         return data['artists'].items;
      } ));
  }

   getArtist(id: string) {
      const headers = this.getHeader();
      return this.http.get(`${this.prefix}artists/${ id }`, { headers })
   }

   getArtistTracks(id:string) {

     // https://api.spotify.com/v1/artists/{id}/top-tracks
      const headers = this.getHeader();
      return this.http.get(`${this.prefix}artists/${ id }/top-tracks?country=es`, { headers })
         .pipe(map( response => {
            return response['tracks'];
         }));

   }

}
