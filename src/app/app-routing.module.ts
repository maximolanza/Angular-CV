import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    data: { title: 'Curriculum Vitae' }
  },{
    path: 'Chat',
    component: ChatComponent,
    data: { title: 'Chat' }
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
  },
  {
    path: '**',
    redirectTo: '/Inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
