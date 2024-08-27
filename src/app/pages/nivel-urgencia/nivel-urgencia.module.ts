import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelUrgenciaPageRoutingModule } from './nivel-urgencia-routing.module';

import { NivelUrgenciaPage } from './nivel-urgencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelUrgenciaPageRoutingModule
  ],
  declarations: [NivelUrgenciaPage]
})
export class NivelUrgenciaPageModule {}
