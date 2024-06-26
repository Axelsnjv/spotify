import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  //Agregando una ruta
  {
    path: "auth",
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)//lazyLoading
  },
  {
    path: "",
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)//lazyLoading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
