import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorQRPageRoutingModule } from './lector-qr-routing.module';

import { LectorQRPage } from './lector-qr.page';
import {ZXingScannerModule} from "@zxing/ngx-scanner";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LectorQRPageRoutingModule,
        ZXingScannerModule
    ],
  declarations: [LectorQRPage]
})
export class LectorQRPageModule {}
