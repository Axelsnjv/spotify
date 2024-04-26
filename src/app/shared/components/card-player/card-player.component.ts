import { Component, Input } from '@angular/core';
import { url } from 'inspector';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode : "small" | "big" = "small"
  @Input() track : TrackModel = {
    _id:0,
    name:"",
    album:"",
    url:"",
    cover:"",
  }
}