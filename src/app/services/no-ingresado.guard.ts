import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from "@ionic/angular";
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(private navCtrl: NavController) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const usuarioLogeado = await Preferences.get({ key: 'usuarioLogeado' });

    if (usuarioLogeado && usuarioLogeado.value === "true") {
      this.navCtrl.navigateRoot('/home');
      return false;
    } else {
      return true;
    }
  }
}
