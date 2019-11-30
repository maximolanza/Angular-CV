import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService, NbToggleModule } from '@nebular/theme';
import { aboutme } from '../../constant/aboutme';

import Typewriter from 't-writer.js';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  /**/
  name = 'Angular';
  @ViewChild('tw',{static : false}) typewriterElement;
  @ViewChild('tw2',{static : false}) typewriterElement2;
  @ViewChild('tw3',{static : false}) typewriterElement3;
  /**/
  public innerWidth: any;
   aboutme = aboutme;
   lineas = aboutme.presentacion;
   json = aboutme.json;
   llave1 = "{";
   llave2 = "}";
  constructor(private sidebarService: NbSidebarService) {
   
  }

  colapsar(){
    this.sidebarService.collapse();
  }
  toggle() {
    this.sidebarService.toggle(true);
  }


   


  ngOnInit() {
    this.innerWidth = window.innerWidth;
      console.log(this.innerWidth);
      if (this.innerWidth<850){
        this.colapsar();
      }
     
    }
  }
  

