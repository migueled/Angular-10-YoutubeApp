import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubeResponse, Video } from '../../models/youtube.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    videos : Video[] = [];

    constructor( private youtubeservice : YoutubeService) { }

    ngOnInit(): void {
        this.youtubeservice.getVideos().subscribe(
            data => {
              this.videos.push( ... data );
            }
        );
    }

}
