import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
//import { SideBarComponent } from 'src/app/shared/components/side-bar/side-bar.component';

const routes: Routes = [
  /*
  {
    path: "",
    component: HomePageComponent
    //component: SideBarComponent //solo para ver que el alias cambio
  }
  */
  {
    path: 'tracks',
    loadChildren: () =>
      import(`./../tracks/tracks.module`).then((m) => m.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import(`./../favorites/favorites.module`).then((m) => m.FavoritesModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import(`./../history/history.module`).then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
