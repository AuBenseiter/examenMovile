import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDosPage } from './menu-dos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDosPageRoutingModule {}
