import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isContext } from 'node:vm';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor(private router: Router) {}

  //Llamado de peticiones a servicios o URL
  ngOnInit(): void {
    //Primer menu
    (this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/'], // http://localhost:4200/
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search-alt',
        router: ['/', 'history'], // http://localhost:4200/history
      },
      {
        name: 'Mi biblioteca',
        icon: 'uil uil-book',
        router: ['/', 'favorites'], // http://localhost:4200/favorites
      },
    ]),
      (this.mainMenu.accessLink = [
        {
          name: 'Crear lista',
          icon: 'uil uil-plus-square',
        },
        {
          name: 'Canciones que te gustan',
          icon: 'uil uil-heart-alt',
        },
      ]),
      (this.customOptions = [
        {
          name: 'Mi lista #1',
          router: ['/'],
        },
        {
          name: 'Mi lista #2',
          router: ['/'],
        },
        {
          name: 'Mi lista #3',
          router: ['/'],
        },
        {
          name: 'Mi lista #4',
          router: ['/'],
        },
      ]);
  }

  goTo(): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      },
    });
  }
}
