import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componente que trabajaran con rutas
import { ArtistComponent } from "./components/artist/artist.component";
import { HomeComponent }   from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home',   component: HomeComponent},
    {path: 'search', component: SearchComponent},

   // with parameters
   {path: 'artist/:id', component: ArtistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
