import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   artists: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(keyWord: string) {

    this._spotifyService.getArtists(keyWord)
    .subscribe((response: any) => {
      console.log(response);
      this.artists = response;
    });
  }

}
