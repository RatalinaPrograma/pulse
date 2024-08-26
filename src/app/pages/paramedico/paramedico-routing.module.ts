import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamedicoPage } from './paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: ParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamedicoPageRoutingModule {}
