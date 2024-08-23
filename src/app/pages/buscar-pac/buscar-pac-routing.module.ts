import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPacPage } from './buscar-pac.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPacPageRoutingModule {}
