import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const storageUsuario = "usuarioData";


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public userCorreo = "";
  constructor() { }

    //obtiene un elemento segun su key desde el Storage (capacitor)

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  //agrega un valor al storage
  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }

//obtiene lista un usuario desde el storage
  async obtenerUsuario(){
    const storageData = await this.getItem(storageUsuario);
    if (storageData == null) {
      return [];
    }
    const data:any[] = JSON.parse(storageData);
    if (data) {
      return data;
    }else{
      return [];
    }
  }
  //Obtener los datos del usuario actual
  async obtenerDatosUsuario() {
    const storageResult = await Preferences.get({ key: 'usuarios' });
    const storageData = storageResult.value;
    if (storageData == null) {
      return null;
    }
    const data: any = JSON.parse(storageData);
    return data ? data : null;
  }

// agrega un usuario al storage
  async agregarUsuario(user:any[]){
    const usuarios = await this.obtenerUsuario();
    for (const i of usuarios) {
      if (i) {
        user.push(i);
      }
    }

    this.setItem(storageUsuario,JSON.stringify(user));
  }



}
