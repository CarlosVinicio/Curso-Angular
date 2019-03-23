import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PricesComponent} from "./components/prices/prices.component";
import {ProtectedComponent} from "./components/protected/protected.component";

import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'prices', component:PricesComponent},
  // la ruta protected tiene como propiedad canActivate que es el metodo que se encuentra en el serivio authGuard
  // cada vez que se intente entrar en esa ruta ejecuta dicho metodo para comprobar si esta autenticado
  {
    path:'protected',
    component:ProtectedComponent,
    canActivate: [ AuthGuardService ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
