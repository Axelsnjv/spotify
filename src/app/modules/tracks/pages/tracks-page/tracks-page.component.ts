import { Component, OnInit, input } from '@angular/core';
import * as dataraw from "./../../../../data/track.json"
import { TrackModel } from 'src/app/core/models/tracks.model';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{
  mockTrackList : Array<TrackModel> = [
  ]


  
  ngOnInit(): void
  {
    const {data} : any = (dataraw as any).default;
    this.mockTrackList = data;    
  }

}
