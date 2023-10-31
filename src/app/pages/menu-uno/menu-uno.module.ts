import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuUnoPageRoutingModule } from './menu-uno-routing.module';

import { MenuUnoPage } from './menu-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuUnoPageRoutingModule
  ],
  declarations: [MenuUnoPage]
})
export class MenuUnoPageModule {}
