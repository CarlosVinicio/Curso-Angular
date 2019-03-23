import { Injectable } from '@angular/core';

// para poder hacer un sistema de guard(Para poder proteger rutas y que solo se puedan visitar
// cuando se este autenticado tendremos que impotar los siguiente)
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

// tambien necesitamos importar el servicio donde necesitamos utilzar
import { AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
// Tenemos que implementar la interfaz CanActivated en la clase y el metodo canActivate
export class AuthGuardService implements CanActivate{

  constructor(private AuthService:AuthService) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.AuthService.isAuthenticated()) {
      console.log('Pasó el guard.')
      return true;
    }else {
      console.error('El guard bloqueo el intento de entrar')
      return false;
    }
  }
}
