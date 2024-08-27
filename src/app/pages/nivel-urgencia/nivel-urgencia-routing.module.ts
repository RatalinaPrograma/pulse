import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelUrgenciaPage } from './nivel-urgencia.page';

const routes: Routes = [
  {
    path: '',
    component: NivelUrgenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelUrgenciaPageRoutingModule {}
