import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums: any[] = [];

  constructor(private _spotifyService: SpotifyService) {

   this._spotifyService.getNewReleases()
   .subscribe( (response: any) => {
      console.log(response);
      this.albums = response;
   });

  }

  ngOnInit() {
  }

}
