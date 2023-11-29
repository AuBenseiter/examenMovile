import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() titulo: string;

  constructor(private router: Router, private storageService: StorageService) {
    this.titulo = '';
  }

  ngOnInit() {
    this.verificarSesionActiva();
  }

  async verificarSesionActiva() {
    const sesionActiva = await this.storageService.isUsuarioLogeado();
    if (!sesionActiva) {
      // Redirige al usuario a la página de inicio o a donde desees si no está logeado
      this.router.navigate(['/']);
    }
  }
  cerrarSesion()
  {
    // Realiza las acciones necesarias para cerrar la sesión
    // Por ejemplo, borrar datos del localStorage, redirigir a la página de inicio, etc.
    this.storageService.cerrarSesion();

    // Redirige a la página de inicio o a donde desees
    this.router.navigate(['/']);
  }
}
