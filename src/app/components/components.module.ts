import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BackButtonComponent} from "./back-button/back-button.component";

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    BackButtonComponent,

  ]
})
export class ComponentsModule { }
