import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroeComponent} from "./components/heroes/heroe.component";

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'hero/:id',   component: HeroeComponent},
    {path:'**', pathMatch:'full', redirectTo:'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
