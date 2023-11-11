import { Component, OnInit } from '@angular/core';
import { BrowserQRCodeReader } from '@zxing/browser';
import { NavController } from '@ionic/angular';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  scannedQRCode: string = '';
  currentLocation: string = '';
  authenticatedUser: any; // Variable para almacenar los detalles del usuario autenticado
  fotoURL: SafeResourceUrl | null = null;

  constructor() {
    private navCtrl: NavController,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  }

  ngOnInit() {
    const fotoURLFromLocalStorage = localStorage.getItem('foto');
    if (fotoURLFromLocalStorage) {
      this.fotoURL = this.sanitizer.bypassSecurityTrustResourceUrl(fotoURLFromLocalStorage);
    }

    const codeReader = new BrowserQRCodeReader();
    const videoElement = document.getElementById('videoElement') as HTMLVideoElement;

    codeReader
      .decodeFromVideoDevice(undefined, videoElement, (result, err) => {
        if (result) {
          this.scannedQRCode = result.getText();
          console.log('Código QR escaneado:', this.scannedQRCode);
        }
        if (err) {
          console.error('Error al escanear:', err);
        }
      })
      .catch((err) => {
        console.error('Error al iniciar la cámara:', err);
      });

    this.getCurrentLocation();
    this.authenticatedUser = this.dataService.getAuthenticatedUser(); // Obtén los detalles del usuario autenticado
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

  navigateLeft() {
    this.navCtrl.back();
  }

  openLink(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
