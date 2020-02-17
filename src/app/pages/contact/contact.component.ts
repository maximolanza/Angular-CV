import { Component, OnInit, HostBinding } from '@angular/core';
import { MailsenderService } from './mailsender.service';
import { mailmensaje } from 'src/app/constant/mailmensaje';
import { NbToastrService, NbSidebarService, NbGlobalPosition, NbGlobalLogicalPosition } from '@nebular/theme';

import { Location } from '@angular/common';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  inputMail: string;
  inputMensaje: string;
  text = '';
  alert = false;
  dangerpos: NbGlobalPosition = NbGlobalLogicalPosition.BOTTOM_START;
  private index = 0;
  @HostBinding('class')
  classes = 'example-items-rows';
  loading = false;
  innerWidth: any;

  constructor(
    protected mailSender: MailsenderService,
    private toastrService: NbToastrService,
    private sidebarService: NbSidebarService,
    private location: Location) {
  }





  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false,3000);
  }

  // Funcion utilizada por el Boton para enviar el mensaje


  toastAlert(isContact: boolean, message: string, title: string, status: any, position: any): any {

    if (isContact) {
      setTimeout(() => {
        if (status === 'success') {
          this.toastrService.success(message, title, { position });
          this.inputMail = '';
          this.inputMensaje = '';
        } else {

          this.toastrService.danger(message, title, { position });

        }
      }, 2000);
    }

    console.log(this.loading);
  }


  sendMailSpinner() {
    this.toggleLoadingAnimation() ; // Here my spinner started but never stopped
   // this.loading = false;
    this.sendMail('bottom-left', 'success', 4000);
  }

  sendMail(position, status, duration) {
   /**/
    // Si el texto del mensaje a enviar es valido
    this.toggleLoadingAnimation();
    if (this.inputMensaje && this.inputMail) {
      let mensaje: mailmensaje;
      // Creo el mensaje para enviar al Servicio
      mensaje = {
        mail: this.inputMail,
        mensaje: this.inputMensaje
      }

      // Envio el mensaje con el servicio
      const errorMessage =  'Algo falló, ¿Podrías intentar otra vez?';
      this.mailSender.sendMailPOST(mensaje, true)
        .subscribe(
          data => this.toastAlert(true, 'Mensaje enviado!!!', 'Ok', 'success', 'bottom-right'),         // process data
          (err: string) => this.toastAlert(true, errorMessage, 'Error', 'danger', 'bottom-right') // process error
        )

      this.alert = true;
      this.index += 1;


    } else {
      // console.log("ELSE inputs vacios");
      this.showToastDanger('danger', position);
    }
  }

  showToastDanger(status: any, position: any) {
    this.toastrService.show(
      '',
      'Los campos no deben de quedar vacíos!',
      { position, status });
  }

  colapsar() {
    this.sidebarService.collapse();
  }
  toggle() {
    this.sidebarService.toggle(true);
  }

  ngOnInit() {

    let mensajeTest: mailmensaje;
      // Creo el mensaje para enviar al Servicio
      mensajeTest = {
        mail: 'Connection_TEST',
        mensaje: 'Works'
      }

      // Envio el mensaje con el servicio
      this.mailSender.sendMailPOST(mensajeTest, false);

    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 850) {
      this.colapsar();
    }
  }






}
