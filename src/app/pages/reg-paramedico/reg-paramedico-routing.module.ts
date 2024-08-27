import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegParamedicoPage } from './reg-paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: RegParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegParamedicoPageRoutingModule {}
