import {Injectable, Input} from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Video} from '../components/models/Video';



@Injectable({
  providedIn: 'root'})



export class PlaylistService {

  @Input() playlistUrl: string;
  @Input() videoArray: Video[];

  constructor(private http: HttpClient) { }
  playlistUrls = 'http://localhost:3000/api';
  getVideos(playlistUrl): Observable<Video[]> {
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      }),
      body: {
        url: playlistUrl,
      }
    };

    return this.http.post<Video[]>(this.playlistUrls, httpOptions);
  }

  downloadVideos(videoArray): Observable<Video[]> {
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      }),
      body: videoArray,
    };

    return this.http.post<Video[]>(this.playlistUrls+'/download', httpOptions);
  }
}
