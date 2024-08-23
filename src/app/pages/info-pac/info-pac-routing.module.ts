import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPacPage } from './info-pac.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPacPageRoutingModule {}
