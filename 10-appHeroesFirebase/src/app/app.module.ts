import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule }  from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { NewHeroDialogComponent} from "./components/heroes/new-hero-dialog.component";

// Material
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';




// Services
import {HeroesService} from "../../../04-SPA/SPA/src/app/services/heroes.service";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    NewHeroDialogComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,

      // Material
      MatTableModule,
      MatDialogModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      MatProgressBarModule,
      MatSnackBarModule
  ],
  providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
      HeroesService
  ],
  entryComponents: [
      NewHeroDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
