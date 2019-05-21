import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { PlaylistInputComponent } from './components/playlist-input/playlist-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoItemComponent,
    PlaylistInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
