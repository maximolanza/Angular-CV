import { ChangeDetectionStrategy, Component, OnInit, HostListener } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { aboutme} from '../../constant/aboutme';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public innerWidth: any;
  collapsed : boolean; 
  avatar = aboutme.avatar;

 
  
  items = [
    {
      title: 'Inicio',
      icon: 'hash-outline',
      link: '/',
    },
    {
      title: 'Curriculum Vitae',
      icon: 'file-outline',
      link: '/cv',
    },
    {
      title: 'ChatBot',
      icon: { icon: 'message-square-outline', pack: 'eva' },
      link: '/Chat',
    },
    {
      title: 'Contacto',
      icon: 'email-outline',
      link: '/Contacto',
    },
  ];
  
  constructor(private sidebarService: NbSidebarService) {
    this.collapsed= false;
  }

  /*colapsar(){
    this.sidebarService.collapse();
  }*/
  toggle() {
    this.sidebarService.toggle(true);
   
    if (this.collapsed){
      this.collapsed=false;
    }else{
      this.collapsed=true;
    }
   
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    
    if (this.innerWidth<850){
       if (this.collapsed){
      this.collapsed=false;
    }else{
      this.collapsed=true;
    }
    }else{

    }
    
    return false;
  }

 
  ngOnInit() {

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth<1200){
      this.collapsed=true;
    }
}
    
  

}
