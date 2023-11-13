import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner/public_api';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';
import {DatosServiceService} from "../../services/datos-service.service";

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {
  scannerEnabled: boolean = true;
  qrResultString: string = "";
  allowedFormats = [ BarcodeFormat.QR_CODE ];
  constructor(private router: Router, private datosService: DatosServiceService) { }

  ngOnInit() {
  }
  readFunc(res:string, status:string){

    if (status == 'success'){
      this.scannerEnabled = false;
      localStorage.setItem('datosqr', res)
      //reviso que esta trallendo
      console.log('llamando a: \n', res);
      this.datosService.setQrResultString(res); // Usamos el servicio para compartir el valor
      this.router.navigateByUrl('datosclase');

    } else if (res == 'failure'){
      console.log('error, intente nuevamente')
    }
  }

}
