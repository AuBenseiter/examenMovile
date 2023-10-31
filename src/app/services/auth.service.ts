import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor() {}

    async IsLoggedIn(): Promise<boolean>{
        const usuarioJSON = await Preferences.get({ key: 'usuario' });
        return usuarioJSON.value ? true : false;

    }

    async getLoggedInUser(): Promise<any> {
        const usuarioJSON = await Preferences.get({ key: 'usuario' })
        return usuarioJSON.value ? JSON.parse(usuarioJSON.value) : null;
    }
 
}
