import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";
import {NoIngresadoGuard} from "./services/no-ingresado.guard";
import {IngresadoGuard} from "./services/ingresado.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]

  },
  {
    path: ':num/menu-uno',
    loadChildren: () => import('./pages/menu-uno/menu-uno.module').then( m => m.MenuUnoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'menu-dos',
    loadChildren: () => import('./pages/menu-dos/menu-dos.module').then( m => m.MenuDosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./pages/lector-qr/lector-qr.module').then( m => m.LectorQRPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'datosclase',
    loadChildren: () => import('./pages/datosclase/datosclase.module').then( m => m.DatosclasePageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
