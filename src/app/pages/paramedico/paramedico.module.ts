import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParamedicoPageRoutingModule } from './paramedico-routing.module';

import { ParamedicoPage } from './paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParamedicoPageRoutingModule
  ],
  declarations: [ParamedicoPage]
})
export class ParamedicoPageModule {}
