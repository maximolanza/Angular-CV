import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit() {


    
  }

}
