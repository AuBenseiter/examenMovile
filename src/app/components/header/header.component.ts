import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() titulo: string;
  constructor(private router: Router) {  this.titulo = '';}

  ngOnInit() {}

  cerrarSesion() {
    // Realiza las acciones necesarias para cerrar la sesión
    // Por ejemplo, borrar datos del localStorage, redirigir a la página de inicio, etc.
    localStorage.clear(); // O utiliza localStorage.removeItem('tu_clave') según tus necesidades

    // Redirige a la página de inicio o a donde desees
    this.router.navigate(['/']);
  }

}
