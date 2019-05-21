import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-input',
  templateUrl: './playlist-input.component.html',
  styleUrls: ['./playlist-input.component.css']
})
export class PlaylistInputComponent implements OnInit {

  constructor() { }
  
  fetchPlaylist(someEvent){
    console.log(someEvent);
  }

  ngOnInit() {
  }

}
