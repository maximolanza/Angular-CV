import { Component, OnInit, HostBinding } from '@angular/core';
import { MailsenderService } from './mailsender.service';
import { mailmensaje } from 'src/app/constant/mailmensaje';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  inputMail;
  inputMensaje;  
  text : String = '';
  alert : boolean = false;

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  
  constructor( protected mailSender : MailsenderService,private toastrService: NbToastrService) {
  }

  sendMail(position,status){
    this.text = '';
    this.text = this.inputMail + '-' +  this.inputMensaje;
    let mensaje : mailmensaje;
    /*mensaje.mail=this.inputMail;
    mensaje.mensaje=this.inputMensaje;*/
    mensaje = {
      "mail": this.inputMail,
      "mensaje": this.inputMensaje
    }
    console.log(mensaje);
    this.mailSender.sendMailPOST(mensaje);
    this.alert = true;


    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      'Mensaje enviado!',
      { position,status});
  }
  
  ngOnInit() {
    
  }


}
