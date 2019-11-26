import { Component, OnInit } from '@angular/core';
import { experiencia} from '../../constant/experiencia';
import { habilidades} from '../../constant/habilidades';
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
  constructor() { }

  ngOnInit() {
    //console.log(this.tareasHB);
  }

}
