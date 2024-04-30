import { OrderListPipe } from './../../pipe/order-list.pipe';
import { Component } from '@angular/core';
import * as dataRaw from "./../../../data/track.json"
import { TrackModel } from 'src/app/core/models/tracks.model';
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  //tracks : Array<TrackModel> = [] //Es lo mismo que 
  tracks : TrackModel[] = []

  ngOnInit(): void{
    const { data }: any = (dataRaw as any).default;
    this.tracks = data
  }
  //El que ocupamos en el pipe y elplay-list-body
  optionSort: {property:string|null, order:string} = {property:null, order:"asc"}
  changeSort(property : string) : void
  {
    const {order} = this.optionSort;
    this.optionSort = {
      property,
      order : order === "asc" ? "desc" : "asc"
    }
    //Para hacer un toggle en el ordenamiento
  }
}
