import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosclasePageRoutingModule } from './datosclase-routing.module';

import { DatosclasePage } from './datosclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosclasePageRoutingModule
  ],
  declarations: [DatosclasePage]
})
export class DatosclasePageModule {}
