import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosclasePageRoutingModule } from './datosclase-routing.module';

import { DatosclasePage } from './datosclase.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatosclasePageRoutingModule,
        ComponentsModule
    ],
  declarations: [DatosclasePage]
})
export class DatosclasePageModule {}
