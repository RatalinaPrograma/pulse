import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModParamedicoPageRoutingModule } from './mod-paramedico-routing.module';

import { ModParamedicoPage } from './mod-paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModParamedicoPageRoutingModule
  ],
  declarations: [ModParamedicoPage]
})
export class ModParamedicoPageModule {}
