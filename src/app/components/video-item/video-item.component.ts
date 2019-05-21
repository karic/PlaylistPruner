import { Component, OnInit, Output } from '@angular/core';
import { Input} from '@angular/core';
import {Video} from '../models/Video';
import { PlaylistService} from '../../services/playlist.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;
  @Output('deleteVideo') delteVideo = new EventEmitter<Video>();
  constructor(private playlistServide: PlaylistService) { }

  ngOnInit() {
  }

  videoDelete(){
    this.delteVideo.emit(this.video);
   }
}
