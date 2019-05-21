import { Component, OnInit } from '@angular/core';
import { Video } from '../models/Video';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(private playlistService: PlaylistService) { }
  videos: Video[];
  private playlistUrl = 'http://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704';

  ngOnInit() {
    // this.playlistService.getVideos(this.playlistUrl).subscribe(videos => {
    //   this.videos = videos;
    // });
  }

  playlistDownload() {
    this.playlistService.downloadVideos(this.videos).subscribe(videos => {
      console.log(videos); this.videos = videos;
    });
  }

  fetchPlaylist(someEvent) {
    console.log(someEvent);
    this.playlistService.getVideos(someEvent).subscribe(videos => {
      this.videos = videos;
    });
  }

  onClick() {
    //  this.playlistService.getVideos(this.playlistUrl).subscribe( videos => {
    //     this.videos = videos;
    // });  
  }

  deleteVideo(event) {
    var videoId = event.id;
    var deleteId = this.videos.findIndex(x => x.id === videoId);
    this.videos.splice(deleteId, 1);
  }


}
