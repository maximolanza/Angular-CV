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

  url = this.server+this.api;


  constructor(private http: HttpClient) { }

/*
  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'text',
      'Access-Control-Allow-Origin': 'http://192.168.1.4:3001',
      'Access-Control-Allow-Credentials': 'true'
    })
  }*/

 


  getMessage(Message : String): Observable<any>{

      const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'text',
     //   'responseType' : 'text'
      })
  };
    console.log(this.url+Message);
   return  this.http.get(this.url+Message.toString(),{responseType: 'text'});
  }
  
}
