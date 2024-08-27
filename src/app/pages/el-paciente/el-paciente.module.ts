import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElPacientePageRoutingModule } from './el-paciente-routing.module';

import { ElPacientePage } from './el-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElPacientePageRoutingModule
  ],
  declarations: [ElPacientePage]
})
export class ElPacientePageModule {}
