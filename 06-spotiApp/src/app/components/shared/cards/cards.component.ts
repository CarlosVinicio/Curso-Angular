import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  @Input() items:any[] = [];

  constructor(private router: Router) {
     console.log('constructor cards.component')
  }

  ngOnInit() {
  }

   onArtistSelected(item: any)
   {
     let artistId: string = '';

     if (item.type == 'artist') {
         artistId = item.id;
     } else {
        artistId = item.artists[0].id;
     }


      this.router.navigate([ '/artist', artistId])
   }

}
