import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { breply } from './botReply';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 respuesta : String;
  messages: any[] = [
    
  ];

  constructor(protected chatService: ChatService) {
    /*this.chatService.getMessage('welcome').subscribe(data => {
      this.respuesta= data;
      //this.messages.push(botReply2);
    });*/
    //this.chatService.getMessage('bienvenido').subscribe(data => {
      //Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.
     // this.respuesta= data.toString();
    //  this.messages = [];
      this.messages.push({
        text: 'Hola. ¿Cómo estas? Gracias por tomarte un tiempo de visitar mi página! Si tenes alguna pregunta, estaría encantado de responderte.',
        date: new Date(),
        reply: false,
        user: {
          name: 'Maximo',
         // avatar: 'https://i.gifer.com/no.gif',
         avatar: 'https://i.imgur.com/fi0KwgG.png',
        },
      });
    //});
    //this.messages. = 
   // this.chatService.getMessage('');
  }

  
  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
    this.chatService.getMessage(event.message).subscribe(data => {
      this.respuesta= data;
      //this.messages.push(botReply2);
    });
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  

/*
    const botReply : breply = {
      text: 'Hola!',
        date: new Date(),
        reply: false,
        user: {
          name: 'Maximo',
          avatar: 'https://i.gifer.com/no.gif',
        },
    }*/
    //if (botReply) {
      setTimeout(() => { this.messages.push({
        text: this.respuesta,
          date: new Date(),
          reply: false,
          user: {
            name: 'Maximo',
            // avatar: 'https://i.gifer.com/no.gif',
            avatar: 'https://i.imgur.com/fi0KwgG.png',
          },
      }); }, 500);
    }
  
  //}

  ngOnInit() {
  }

}
