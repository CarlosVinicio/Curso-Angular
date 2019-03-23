import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// necesario para trabajar con formularios, y ReactiveFormsModule es para utilizar formularios reactivos
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import {HttpClientModule} from '@angular/common/http';

// services
import {FakeapiService} from "./services/fakeapi.service";

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FakeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

