import { Component, OnInit } from '@angular/core';
import {DatosServiceService} from "../../services/datos-service.service";
import {Preferences} from "@capacitor/preferences";
import {Geolocation, GeolocationPosition} from "@capacitor/geolocation";


@Component({
  selector: 'app-datosclase',
  templateUrl: './datosclase.page.html',
  styleUrls: ['./datosclase.page.scss'],
})
export class DatosclasePage implements OnInit {
  qrResultString: string = '';
  currentLocation: string = '';
  constructor(private datosService: DatosServiceService) { }

  async ngOnInit() {
    // Lee el valor desde capacitor
    const storedValue = await Preferences.get({ key: 'qrResultString' });
    this.qrResultString = storedValue && storedValue.value ? storedValue.value : '';

    // Suscribe al observable para obtener futuros cambios
    this.datosService.qrResultString$.subscribe((value) => {
      this.qrResultString = value;
      this.getCurrentLocation();s
    });

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
