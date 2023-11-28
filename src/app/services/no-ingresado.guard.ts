import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(private navCtrl: NavController) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("Sesión iniciada")){
      this.navCtrl.navigateRoot('/home');
      return false;
    }else{
      this.navCtrl.navigateRoot('/login'); // or '/home' depending on your desired behavior
      return false;
    }
  }
}
