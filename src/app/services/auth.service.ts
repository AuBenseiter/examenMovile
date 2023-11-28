import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public isLoggedIn = false;
    public redirectUrl: string | null = null;
    constructor(private router: Router) {}

    async IsLoggedIn(): Promise<boolean>{
        const usuarioJSON = await Preferences.get({ key: 'usuario' });
        return usuarioJSON.value ? true : false;

    }

    async getLoggedInUser(): Promise<any> {
        const usuarioJSON = await Preferences.get({ key: 'usuario' })
        return usuarioJSON.value ? JSON.parse(usuarioJSON.value) : null;
    }
    async logout(): Promise<void> {
        try {
          await Preferences.remove({ key: 'usuario' });
          console.log('Logout successful');
          
          const navigationExtras: NavigationExtras = { replaceUrl: true };
          this.router.navigate(['/login'], navigationExtras);
        } catch (error) {
          if(error instanceof Error) {
            console.error('Logout error:', error.message);
          } else {
            console.error('Unexpected logout error:', error); 
          }
          } finally {
          console.log('Logout method finished');
        }
      
      }
}
