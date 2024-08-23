import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeSintomasPage } from './informe-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: InformeSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeSintomasPageRoutingModule {}
