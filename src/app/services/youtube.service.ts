import { Injectable } from '@angular/core';

import { HttpClient , HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.model';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class YoutubeService {
    //?part=snippet&=&=&=10
    private youtubeUrl    : string = 'https://www.googleapis.com/youtube/v3';
    private apiKey        : string = 'AIzaSyBHLZzytcylRRpuFepi2mHyMD3Ede-r7-s';
    private playList      : string = 'UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken : string = '';

    constructor( private http : HttpClient ) { }

    getVideos() {
        const url = `${ this.youtubeUrl }/playlistItems`
        const params = new HttpParams()
        .set( 'part' ,         'snippet' )
        .set( 'maxResults' ,   '10' )
        .set( 'playlistId' ,   this.playList )
        .set( 'key' ,          this.apiKey );

        return this.http.get< YoutubeResponse >( url , { params } )
        .pipe(
            map(
                data => {
                    this.nextPageToken = data.nextPageToken;
                    return data.items.map( video => video.snippet );
                }
            )
        );
    }
}
