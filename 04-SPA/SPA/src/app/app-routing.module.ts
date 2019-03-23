

import { NgModule } from '@angular/core';
// importamos esos modulos para poder trabajar con rutas
import { RouterModule, Routes } from '@angular/router';


// Componentes que forman parte de laas rutas
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilterByWordComponent} from './components/filter-by-word/filter-by-word.component';


// Array de rutas con el componente hacia el que apunta
// redirectTo redirigira hacia la ruta indicada en caso que no
// encuentre ninguna de las demas rutas declaradas en el array
// de rutas
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'filter/by/word/:word', component: FilterByWordComponent },

    /* Esta ruta utiliza parametros llamado id, podremos hacer uso de este parametro en el componente Hero
       recibiendolo mediante la clase ActivatedRoute (al estilo stateParams en angularjs)
     */
  {path: 'hero/:id', component: HeroComponent},

];

// Necesario para poder renderizar en los templates
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


