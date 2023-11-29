import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BackButtonComponent} from "./back-button/back-button.component";
import {HeaderComponent} from "./header/header.component";
import {LoginHeaderComponent} from "./login-header/login-header.component";

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,
    LoginHeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    BackButtonComponent,
    HeaderComponent,
    LoginHeaderComponent,

  ]
})
export class ComponentsModule { }
