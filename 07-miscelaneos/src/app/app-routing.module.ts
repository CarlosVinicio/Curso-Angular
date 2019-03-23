import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {NewUserComponent} from "./components/user/new-user.component";
import {EditUserComponent} from "./components/user/edit-user.component";
import {DetailUserComponent} from "./components/user/detail-user.component";
//import { RoutesChildUser }

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },

  // En el componente user tendremos rutas hijas, en este caso
  // una botonera cn rutas hijas
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      {path: 'new' , component: NewUserComponent},
      {path: 'edit' , component: EditUserComponent},
      {path: 'detail' , component: DetailUserComponent},
      {path: '**', pathMatch:'full', redirectTo:'new'} // Cualquier cosa que no sean las rutas anterores redirigira al home
    ]


    /* Otra forma de poner nuestras rutas hijas es centralizarlas en un archivo independiente
     y llamarlas desde aqui
    children: RoutesChildUser // esto puede ser un archivo separado
    */
  },

  { path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
