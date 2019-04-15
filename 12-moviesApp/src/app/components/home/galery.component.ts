import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
})
export class GaleryComponent implements OnInit {

  url:string = 'http://image.tmdb.org/t/p/w500';
  @Input('movies') movies;
  @Input('title') title;

  constructor() { }

  ngOnInit() {
  }

}
