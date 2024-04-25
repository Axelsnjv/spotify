import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

@NgModule({
  declarations: [ //son componentes, directivas, pipes 
    AppComponent,
    HomePageComponent
  ],
  imports: [ //Solo se importan modulos
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
