import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Agregando una ruta
  {
    path: "",
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)//lazyLoading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
