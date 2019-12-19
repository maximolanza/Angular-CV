import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { breply } from './botReply';
import { ChatService } from './chat.service';
import { NbSidebarService } from '@nebular/theme';
import { aboutme } from 'src/app/constant/aboutme';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  respuesta: String;
  avatar = aboutme.avatar;
  messages: any[] = [

  ];

  constructor(protected chatService: ChatService, private sidebarService: NbSidebarService) {
    this.messages.push({
      text: 'Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.',
      date: new Date(),
      reply: false,
      user: {
        name: 'Maximo',
        avatar: this.avatar,
      },
    });
  }



  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
    this.respuesta = '';

    /* Mensaje del visitante */
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      user: {
        name: userName,
        avatar: avatar
      },
    });
    
    /* Obtengo respuesta */
    //this.chatService.getMessage(event.message);
    this.chatService.getMessage(event.message).subscribe(data => {
 
      this.respuesta = data;
      console.log(this.respuesta);
      console.log(this.respuesta.length);
      /* Si no esta vacia, respondo lo que obtengo */
    if (this.respuesta.length > 2) {
      this.messages.push({
        text: this.respuesta,
        date: new Date(),
        reply: false,
        user: {
          name: 'Maximo',
          avatar: this.avatar,
        },
      });

    }else{
      this.messages.push({
        text: 'Ups, esto es incómodo, tengo un problemita técnico en la conexción al servicio de chat. Disculpas!',
        date: new Date(),
        reply: false,
        user: {
          name: 'Maximo',
          avatar: this.avatar,
        },
      });
    }


    });


    

    /* if (this.respuesta.includes('página')) {
       this.chatService.getMessage(event.message).subscribe(data => {
         this.respuesta = data;
       });
     }*/




    // setTimeout(() => { 
    // }
    //   , 1500);

    
  }


  colapsar() {
    this.sidebarService.collapse();
  }
  toggle() {
    this.sidebarService.toggle(true);
  }

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 850) {
      this.colapsar();
    }
    // this.chatService.getMessage('hola').subscribe(data => {
    //this.respuesta= data;
    /**setTimeout(() => { this.messages.push({
      text: this.respuesta,
        date: new Date(),
        reply: false,
        user: {
          name: 'Maximo',
          avatar: 'https://i.imgur.com/fi0KwgG.png',
        },
    }); }, 20);*/
    // });

  }

}
