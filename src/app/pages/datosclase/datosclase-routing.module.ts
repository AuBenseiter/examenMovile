import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosclasePage } from './datosclase.page';

const routes: Routes = [
  {
    path: '',
    component: DatosclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosclasePageRoutingModule {}
