import { Component, OnInit } from '@angular/core';
import { isContext } from 'node:vm';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions : [], accessLink : []  }

  customOptions: Array<any> = []

  constructor() { }
  
  //Llamado de peticiones a servicios o URL
  ngOnInit(): void { 
    //Primer menu
    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: 'uil uil-home',
        router: ["/"]
      },
      {
        name: "Buscar",
        icon: 'uil uil-search-alt',
        router: ["/", "history"]
      },
      {
        name: "Mi biblioteca",
        icon: 'uil uil-book',
        router: ["/", "favorites"]
      }
    ],
    this.mainMenu.accessLink = [
      {
        name: "Crear lista",
        icon: "uil uil-plus-square"
      },
      {
        name: "Canciones que te gustan",
        icon: "uil uil-heart-alt"
      }
    ],
    this.customOptions = [
      {
        name: "Mi lista #1",
        router: ["/"]
      },
      {
        name: "Mi lista #2",
        router: ["/"]
      },
      {
        name: "Mi lista #3",
        router: ["/"]
      },
      {
        name: "Mi lista #4",
        router: ["/"]
      }
    ]
  }
}
