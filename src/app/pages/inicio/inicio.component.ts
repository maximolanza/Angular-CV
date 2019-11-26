import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbToggleModule } from '@nebular/theme';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  constructor(private sidebarService: NbSidebarService) {
   
  }

  colapsar(){
    this.sidebarService.collapse();
  }
  toggle() {
    this.sidebarService.toggle(true);
  }
  public innerWidth: any;
  ngOnInit() {
    

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth<850){
      this.colapsar();
    }
   
  }

}
