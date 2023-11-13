import { Component, OnInit } from '@angular/core';
import {DatosServiceService} from "../../services/datos-service.service";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-datosclase',
  templateUrl: './datosclase.page.html',
  styleUrls: ['./datosclase.page.scss'],
})
export class DatosclasePage implements OnInit {
  qrResultString: string = '';
  constructor(private datosService: DatosServiceService) { }

  async ngOnInit() {
    // Lee el valor desde capacitor
    const storedValue = await Preferences.get({ key: 'qrResultString' });
    this.qrResultString = storedValue && storedValue.value ? storedValue.value : '';

    // Suscribe al observable para obtener futuros cambios
    this.datosService.qrResultString$.subscribe((value) => {
      this.qrResultString = value;
    });
  }

}
