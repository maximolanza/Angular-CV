import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Error404Component } from './pages/error404/error404.component';


const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    data: { title: 'Curriculum Vitae' }
  }/*,{
    path: 'Chat',
    component: ChatComponent,
    data: { title: 'Chat' }
  },*/
  ,{
    path: 'Chat',
    redirectTo: '/404'
  },
  { path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
  },{
    path: 'Contacto',
    component: ContactComponent,
    data: { title: 'Contacto' }
  },{
    path: 'Inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },{
    path: '404',
    component: Error404Component,
    data: { title: '404' }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
