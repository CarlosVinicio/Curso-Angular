import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Para trabajar con Firebase
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChatComponent } from './components/chat/chat.component';
import {FormsModule} from "@angular/forms";

// Services
import { ChatService } from "./services/chat.service";
import { LoginComponent } from './components/login/login.component';
import { NoOwnUserPipe } from './pipes/no-own-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    NoOwnUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
