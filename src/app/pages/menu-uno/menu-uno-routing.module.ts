import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuUnoPage } from './menu-uno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuUnoPageRoutingModule {}
