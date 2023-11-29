import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BackButtonComponent} from "./back-button/back-button.component";
import {HeaderComponent} from "./header/header.component";
import {LoginHeaderComponent} from "./login-header/login-header.component";
import {DarkModeComponent} from "./dark-mode/dark-mode.component";
import {StorageService} from "../services/storage.service";

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,
    LoginHeaderComponent,
    DarkModeComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports :[
    BackButtonComponent,
    HeaderComponent,
    LoginHeaderComponent,
    DarkModeComponent,

  ]
})
export class ComponentsModule { }
