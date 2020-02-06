import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RESTSERVER, EndPoints } from 'src/app/constant/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  server = RESTSERVER;
  api = EndPoints.api;

  url = this.server + this.api;


  constructor(private http: HttpClient) { }

  getMessage(Message: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text'
      })
    };
    console.log(this.url + Message);
    return this.http.get(this.url + Message.toString(), { responseType: 'text' });
  }

}
