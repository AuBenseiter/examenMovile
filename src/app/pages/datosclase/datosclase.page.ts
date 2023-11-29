import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {DatosServiceService} from "../../services/datos-service.service";
import {Preferences} from "@capacitor/preferences";
import {Geolocation, GeolocationPosition} from "@capacitor/geolocation";
import {StorageService} from "../../services/storage.service";
@Component({
  selector: 'app-datosclase',
  templateUrl: './datosclase.page.html',
  styleUrls: ['./datosclase.page.scss'],
})
export class DatosclasePage implements OnInit {
  qrResultString: string = '';
  currentLocation: string = '';
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  carrera: string = '';
  constructor(private datosService: DatosServiceService, private storageService: StorageService, private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    // Lee el valor desde capacitor
    const storedValue = await Preferences.get({ key: 'qrResultString' });
    this.qrResultString = storedValue && storedValue.value ? storedValue.value : '';

    // Suscribe al observable para obtener futuros cambios
    this.datosService.qrResultString$.subscribe(async(value) => {
      //this.qrResultString = value;
      this.qrResultString = storedValue && storedValue.value ? storedValue.value : '';
      this.getCurrentLocation();
      await this.obtenerDatosUsuario();
    });
  }

  // Obtiene los datos del usuario
  // Obtener los datos del usuario
  async obtenerDatosUsuario() {
    const datosUsuario = await this.storageService.obtenerDatosUsuario();
    if (datosUsuario && datosUsuario.length > 0) {
      const primerUsuario = datosUsuario[0];
      this.nombre = primerUsuario.nombre;
      this.apellido = primerUsuario.apellido;
      this.usuario = primerUsuario.usuario;
      this.carrera = primerUsuario.carrera;
      // Forzar la actualización de la vista
      this.cdr.detectChanges();
      console.log(this.nombre, this.apellido, this.usuario, this.carrera);
      console.log('Datos del usuario:', primerUsuario);
    }
    console.log('Datos del usuario 2:', datosUsuario);
  }
  async getCurrentLocation() {
    try {
      const coordinates: GeolocationPosition = await Geolocation.getCurrentPosition();
      this.currentLocation = `Latitud: ${coordinates.coords.latitude}, Longitud: ${coordinates.coords.longitude}`;
      console.log('Ubicación actual:', this.currentLocation);
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }

  }
}
