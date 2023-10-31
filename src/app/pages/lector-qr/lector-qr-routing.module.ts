import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LectorQRPage } from './lector-qr.page';

const routes: Routes = [
  {
    path: '',
    component: LectorQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LectorQRPageRoutingModule {}
