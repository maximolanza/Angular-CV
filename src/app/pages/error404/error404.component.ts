import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
 i : number= 0;
 txt  : String= 'Lorem ipsum dummy text blabla.';
 speed  : number= 50;
  constructor() { }

  ngOnInit() {
  
    
  let i = 0;
  let i2 = 0;
  let i3 = 0;  
  let txt = 'Ups, creo que algo salió mal.';
  let txt2 = '¿Podrias chequear si esta correcta la dirección URL?';
  let txt3 = 'Gracias!';
  let speed = 50;

  startTW1();
  startTW2();
  startTW3();
  function startTW1() {
    
    typeWriter1();
    
  };
  
  function  startTW2()  {
    setTimeout(
      typeWriter2
      ,2000);
  };

  function startTW3() {
    setTimeout(
      typeWriter3
      ,5000);
  };

  
    function typeWriter1(/*i: number, txt: String, speed: number*/){
     if ( i < txt.length) {
       document.getElementById("demo").innerHTML +=  txt.charAt( i);
       console.log(i);
       i++;
       setTimeout(typeWriter1,  speed);
     }
   }

   function typeWriter2(/*i: number, txt: String, speed: number*/){
    if ( i2 < txt2.length) {
      document.getElementById("demo2").innerHTML +=  txt2.charAt( i2);
      console.log(i2);
      i2++;
      setTimeout(typeWriter2,  speed);
    }
  }

  function typeWriter3(/*i: number, txt: String, speed: number*/){
    if ( i3 < txt3.length) {
      document.getElementById("demo3").innerHTML +=  txt3.charAt( i3);
      console.log(i3);
      i3++;
      setTimeout(typeWriter3,  speed);
    }
  }
   

  }


  

}
