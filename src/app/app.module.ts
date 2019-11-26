import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbSidebarModule, NbButtonModule,NbCardHeaderComponent,NbCardBodyComponent,NbCardComponent, NbMenuComponent, NbMenuItem, NbMenuItemComponent, NbIconComponent, NbMenuModule, NbChatModule, NbActionsModule, NbInputModule, NbUserModule, NbStepComponent, NbStepperModule, NbDialogModule, NbCardFooterComponent, NbDialogService, NbDialogContainerComponent, NbIconModule, NbCardModule, NbTooltipModule, NbListModule, NbToastrService, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CvComponent } from './pages/cv/cv.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatService } from './pages/chat/chat.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MailsenderService } from './pages/contact/mailsender.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CvComponent,
    ChatComponent,
    ContactComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbChatModule,
    HttpClientModule,
    NbActionsModule,
    NbInputModule,
    NbUserModule,
    NbStepperModule,
    NbDialogModule,
    NbCardModule,
    NbTooltipModule,
    FormsModule,
    NbListModule,
    NbToastrModule.forRoot()
    
   
  ],
  providers: [ChatService,MailsenderService,NbToastrService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
