import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";

//services
import { SpotifyService } from "./services/spotify.service";

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import {SafeUrlPipe} from "./pipes/safe-url.pipe";



// Components
import { CardsComponent } from "./components/shared/cards/cards.component";

import { MatTableModule } from "@angular/material";
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
     CardsComponent,
     SafeUrlPipe,
     ResaltadoDirective
  ],
  imports: [
     HttpClientModule,
     BrowserModule,
     AppRoutingModule,
     MatTableModule
  ],
  providers: [
     SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
