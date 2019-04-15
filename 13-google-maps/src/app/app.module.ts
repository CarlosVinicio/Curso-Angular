import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { EditMarkerDialogComponent } from './components/maps/edit-marker-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    EditMarkerDialogComponent
  ],
  declarations: [
    AppComponent,
    MapsComponent,
    EditMarkerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsLvQOYKwBCupeB9c8nOY7oUaaa37OnAc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
