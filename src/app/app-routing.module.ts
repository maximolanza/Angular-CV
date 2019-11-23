import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';


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
    redirectTo: '/Chat',
    pathMatch: 'full'
  },{
    path: 'Contacto',
    component: ContactComponent,
    data: { title: 'Contacto' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
