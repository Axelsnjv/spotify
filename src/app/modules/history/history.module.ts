import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    //SharedModule
  ]
})
export class HistoryModule { }
