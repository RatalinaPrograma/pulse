import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModParamedicoPage } from './mod-paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: ModParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModParamedicoPageRoutingModule {}
