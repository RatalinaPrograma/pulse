import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignosVitPage } from './signos-vit.page';

const routes: Routes = [
  {
    path: '',
    component: SignosVitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignosVitPageRoutingModule {}
