import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegParamedicoPageRoutingModule } from './reg-paramedico-routing.module';

import { RegParamedicoPage } from './reg-paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegParamedicoPageRoutingModule
  ],
  declarations: [RegParamedicoPage]
})
export class RegParamedicoPageModule {}
