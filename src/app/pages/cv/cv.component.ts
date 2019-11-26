import { Component, OnInit } from '@angular/core';
import { experiencia} from '../../constant/experiencia';
import { habilidades} from '../../constant/habilidades';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  exp = experiencia;
  tareasHB= this.exp[0].Tareas
  tareasE= this.exp[1].Tareas
  skills = habilidades;

  skillsJava= this.skills[0].descriptions;
  skillsAngular= this.skills[1].descriptions;
  skillsNodeJs= this.skills[2].descriptions;
  skillsOtros= this.skills[3].descriptions;
  
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
