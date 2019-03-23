import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { HeroesService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilterByWordComponent } from './components/filter-by-word/filter-by-word.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    FilterByWordComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // nombre de la clase routing del archivo app-routing.module.ts
  ],
  // aqui irán los servicios
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
