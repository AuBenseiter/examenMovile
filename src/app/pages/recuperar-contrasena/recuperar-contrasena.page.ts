import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {
  usuarios: any[] = [];

  nombreUsuarioInput: string = '';
  resultadoContrasena: string = '';

  constructor() { }

  async ngOnInit() {
    // Obtener la lista de usuarios desde las preferencias
    const usuariosPreferences = await Preferences.get({ key: 'usuarios' });
    if (usuariosPreferences && usuariosPreferences.value) {
      this.usuarios = JSON.parse(usuariosPreferences.value);
    }
  }

  buscarContrasena() {
    const contrasenaEncontrada = this.usuarios.find(usuario => usuario.usuario === this.nombreUsuarioInput);

    if (contrasenaEncontrada) {
      this.resultadoContrasena = 'Contraseña encontrada: ' + contrasenaEncontrada.password;
    } else {
      this.resultadoContrasena = 'Nombre de usuario no encontrado';
    }
  }
}
