import { ChangeDetectionStrategy, Component, OnInit, HostListener } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
import { aboutme } from '../../constant/aboutme';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public innerWidth: any;
  collapsed: boolean;
  avatar = aboutme.avatar;
  link = aboutme.gmailpdf;
  bigSize = false;
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
    /*{
      title: 'ChatBot',
      icon: { icon: 'message-square-outline', pack: 'eva' },
      link: '/Chat',
    },
    {
      title: 'Contacto',
      icon: 'email-outline',
      link: '/Contacto',
    },*/
  ];

  constructor(private sidebarService: NbSidebarService) {
    this.collapsed = false;
  }

  toggle() {


   /* this.collapsed = !this.collapsed;

    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 850) {
      if (this.bigSize) {
        this.collapsed = !this.collapsed;
      }
      this.sidebarService.toggle(false);
    } else {
      this.sidebarService.toggle(true);
      if (!this.bigSize) {
        this.collapsed = !this.collapsed;
      }
    }
*/
this.innerWidth = window.innerWidth;
this.sidebarService.toggle(!(this.innerWidth < 850));
console.log("toggle");
    return false;
  }


  ngOnInit() {

    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    if (this.innerWidth < 1200) {
      this.bigSize = false;
      this.collapsed = true;
    } else {
      this.bigSize = true;
    }
  }

  onClickedInside(e: Event) {
    //const stickBottom = '<rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect>';
   // const stickMiddle = '<rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect>';
   // const stickTop = '<rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect>';
   // const box = '<rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>';
    //const intem = '<i class="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" class="eva eva-menu-outline eva-animation eva-icon-hover-zoom" fill="currentColor"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"></rect><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"></rect><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"></rect></g></g></svg></i>'
    //if(!this.collapsed && e.path[6] != "hamburguer"){
    //  console.log(e.target);
    //  if ( e.target != stickBottom ||  e.target != stickMiddle || e.target != stickTop ||  e.target != box  ) {
    this.innerWidth = window.innerWidth;
   /* if (this.innerWidth < 850) {
      this.sidebarService.collapse();
    } else {
      this.sidebarService.toggle();
    }*/
   // this.sidebarService.toggle(!(this.innerWidth < 850));
   if (this.innerWidth < 850) {
    this.sidebarService.collapse();
  } else {
    this.sidebarService.compact();
  }
 // }

  }

}
