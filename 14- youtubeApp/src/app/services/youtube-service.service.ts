import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable( {
    providedIn: 'root'
} )
export class YoutubeService {
    // playlistItems
    private youtubeUlr: string = ' https://www.googleapis.com/youtube/v3';
    private API_KEY: string = 'AIzaSyBN8x6jcfMSYrag9VkGleyiX4cBJGplCXE';
    private chanelID: string = 'PLu5KE9-__OaVEN4-C9-87XFU5APfkpcYL';
    private nextPageToken: string = "";

    constructor( private http: HttpClient ) {

    }

    getPlaylist() {
        let parameters = new HttpParams();
        parameters = parameters.set( 'part', 'snippet' );
        parameters = parameters.set( 'maxResults', '10' );
        parameters = parameters.set( 'playlistId', this.chanelID );
        parameters = parameters.set( 'key', this.API_KEY );

        if ( this.nextPageToken ){
            parameters = parameters.set('pageToken', this.nextPageToken);
        }

        return this.http.get( `${ this.youtubeUlr }/playlistItems`, { params: parameters } )
            .pipe( map( result => {

                let videos: any[] = [];

                this.nextPageToken = result['nextPageToken'];

                for ( let i = 0; i <= result['items'].length - 1; i++ ) {
                    videos.push( result['items'][i]['snippet'] );
                }


                return videos;
            } ) )
    }
}
