import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover : TrackModel =
  {
    cover: "https://i.scdn.co/image/ab67616d00001e02c9689f393895847de98382e0",
    album: "Transtorno Bipolar",
    name: "Preso de mi soledad",
    url: "",
    _id: 1
  }

}
