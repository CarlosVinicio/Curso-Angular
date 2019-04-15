import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube-service.service";

declare var $: any;

@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
} )
export class HomeComponent implements OnInit {

    videos: any[] = [];
    videoSelected: any;


    constructor( private _ys: YoutubeService ) {

        _ys.getPlaylist().subscribe(
            result => {
                this.videos = result;
                console.log( result );
            }
        )
    }

    ngOnInit() {
    }


    viewVideo( video: any ) {

        this.videoSelected = video;
        $( '#myModal' ).modal( {
            backdrop: 'static',

        } );

        console.log( video )
    }

    closeModal() {
        this.videoSelected = null;
        $( '#myModal' ).modal( 'hide' );

    }


    viewMore() {
        this._ys.getPlaylist().subscribe(
            result => {
                this.videos.push.apply(this.videos, result);
            }
        )
    }

}
