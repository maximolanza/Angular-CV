import { Injectable } from '@angular/core';
import { RESTSERVER, EndPoints } from 'src/app/constant/config';
import { Observable,Subject, of, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { mailmensaje } from 'src/app/constant/mailmensaje';
import { catchError, tap,retry } from 'rxjs/operators';

import { NbToastrService, NbSidebarService, NbGlobalPosition, NbGlobalLogicalPosition } from '@nebular/theme';
@Injectable({
  providedIn: 'root'
})
export class MailsenderService {
  server = RESTSERVER;
  mail = EndPoints.mail;
  send = EndPoints.send;
  body : mailmensaje;
  url = this.server+this.send;
  private _refreshNeeded$ = new Subject <void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private http: HttpClient, private toast : NbToastrService) { }

  sendMail(mailtext : String): Observable<any>{
    const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'text',
    })
};
  console.log(this.url+mailtext);
 return  this.http.post(this.url+mailtext.toString(),{responseType: 'text'});
}

sendMailPOST(mail: mailmensaje, isContact: boolean) {
    const body =  JSON.stringify(mail);
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    console.log("url: ",this.url);
    console.log("Mail: ",JSON.stringify(mail));
 
    return this.http.post<mailmensaje>(this.url, body, httpOptions);
}


handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}


}
