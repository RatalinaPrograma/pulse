import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElPacientePage } from './el-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ElPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElPacientePageRoutingModule {}
