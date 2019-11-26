import { Component, OnInit, HostBinding } from '@angular/core';
import { MailsenderService } from './mailsender.service';
import { mailmensaje } from 'src/app/constant/mailmensaje';
import { NbToastrService, NbSidebarService,NbGlobalPosition, NbGlobalLogicalPosition } from '@nebular/theme';
import { stringLiteral } from '@babel/types';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  inputMail : String;
  inputMensaje : String;  
  text : String = '';
  alert : boolean = false;
  dangerpos : NbGlobalPosition = NbGlobalLogicalPosition.BOTTOM_START;
  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  
  constructor( protected mailSender : MailsenderService,private toastrService: NbToastrService,private sidebarService: NbSidebarService) {
  }

  sendMail(position,status,duration){
    
    if (this.inputMensaje && this.inputMail ){
      
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
    //(<HTMLInputElement>document.getElementById("InputMessage")).value = '';
    //(<HTMLInputElement>document.getElementById("InputMail")).value = '';
    this.inputMail ='';
    this.inputMensaje='';
    setTimeout(() => {
    this.toastrService.show(
      '',//status || 'Success',
      'Mensaje enviado!',
      { position,status,duration})}
      , 2000);
    }else{
      console.log("ELSE inputs vacios");
            this.showToastDanger('danger',position);
           /* this.toastrService.show(
              status || 'Danger',
              'Los campos no deben de quedar vacíos!',
              { position,status});*/
    }
  }
 
showToastDanger(status:any, position : any){
  this.toastrService.show(
    '',
    'Los campos no deben de quedar vacíos!',
    { position,status});
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
