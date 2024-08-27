import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModPacientePage } from './mod-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ModPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModPacientePageRoutingModule {}
