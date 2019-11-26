import { Injectable } from '@angular/core';
import { RESTSERVER, EndPoints } from 'src/app/constant/config';
import { Observable,Subject, of, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { mailmensaje } from 'src/app/constant/mailmensaje';
import { catchError, tap } from 'rxjs/operators';

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



  constructor(private http: HttpClient) { }


  sendMail(mailtext : String): Observable<any>{

    const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'text',
   //   'responseType' : 'text'
    })
};
  console.log(this.url+mailtext);
 return  this.http.post(this.url+mailtext.toString(),{responseType: 'text'});
}


/*
sendMailPOST(m:String, mensaje:String): Observable<mailmensaje>{
  
  this.body.mail= m;
  this.body.mensaje=mensaje;
  console.log(JSON.stringify(body));
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'JSON'
      })
  };
  
  let jsonMensaje = JSON.stringify(this.body);
  return this.http.post<mailmensaje>(this.url,jsonMensaje,httpOptions);
  }
*/

sendMailPOST(mail: mailmensaje) {
    //const body = JSON.stringify(hecho);
    
    
   
    const body =  JSON.stringify(mail);
   
   // console.log("body: ",body);
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    console.log("url: ",this.url);
    console.log("Mail: ",JSON.stringify(mail));
    //return of(camion);
    return this.http.post<mailmensaje>(this.url, body, httpOptions).subscribe((result) => console.log(result));//.pipe(catchError(this.handleError), tap( () => {this._refreshNeeded$.next(); }));
}





private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}


}
