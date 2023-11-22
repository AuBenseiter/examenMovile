import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {ComponentsModule} from "../components/components.module";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
