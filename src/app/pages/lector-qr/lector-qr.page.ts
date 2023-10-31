import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner/public_api';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {
  scannerEnabled: boolean = true;
  qrResultString: string = "";
  allowedFormats = [ BarcodeFormat.QR_CODE ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  readFunc(res:string, status:string){

    if (status == 'success'){
      this.scannerEnabled = false;
      localStorage.setItem('datosqr', res)
      this.router.navigateByUrl('datosclase');

    } else if (res == 'failure'){
      console.log('error, intente nuevamente')
    }
  }

}
