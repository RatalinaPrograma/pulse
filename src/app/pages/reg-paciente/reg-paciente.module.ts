import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegPacientePageRoutingModule } from './reg-paciente-routing.module';

import { RegPacientePage } from './reg-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegPacientePageRoutingModule
  ],
  declarations: [RegPacientePage]
})
export class RegPacientePageModule {}
