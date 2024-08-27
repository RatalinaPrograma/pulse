import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModPacientePageRoutingModule } from './mod-paciente-routing.module';

import { ModPacientePage } from './mod-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModPacientePageRoutingModule
  ],
  declarations: [ModPacientePage]
})
export class ModPacientePageModule {}
