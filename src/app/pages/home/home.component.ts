import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubeResponse, Video } from '../../models/youtube.model';

import Swal from 'sweetalert2'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    videos : Video[] = [];

    constructor( private youtubeservice : YoutubeService) { }

    ngOnInit(): void {
        this.cargarVideos();
    }

    cargarVideos(){
        this.youtubeservice.getVideos().subscribe(
            data => {
              this.videos.push( ... data );
              console.log( this.videos );
            }
        );
    }

    mostrarVideo( video : Video ) {
        Swal.fire({
            html :`
            <h4>${ video.title }</h4>
            <hr>
            <iframe width="100%"
                        height="315" 
                        src="https://www.youtube.com/embed/${ video.resourceId.videoId }"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture"
                        allowfullscreen>
                    </iframe>`
        });
    }

}
