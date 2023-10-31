import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDosPageRoutingModule } from './menu-dos-routing.module';

import { MenuDosPage } from './menu-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDosPageRoutingModule
  ],
  declarations: [MenuDosPage]
})
export class MenuDosPageModule {}
