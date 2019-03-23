import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

export interface Tile {
   color: string;
   cols: number;
   rows: number;
   text: string;
}

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


   artist:any = null;
   topTracks       : any[] = [];

   displayedColumns: string[] = [
      'Photo',
      'Album',
      'Song',
      'Preview'
   ];


   constructor(private router: ActivatedRoute, private SpotifyService : SpotifyService) {
     this.router.params.subscribe(
        params => {
            this.getArtist(params['id']);
            this.getArtistTracks(params['id']);
        }
     );
  }

  ngOnInit() {
  }

  getArtist(id:string) {
     this.SpotifyService.getArtist(id).subscribe(
        (response) => {
           //console.log(response)
           this.artist = response;
        }
     )
  }


  getArtistTracks(id) {
     this.SpotifyService.getArtistTracks(id).subscribe(
        (response) => {
           console.log(response)
           this.topTracks = response;
        }
     )
  }

}
