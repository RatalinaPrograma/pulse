import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPacPageRoutingModule } from './buscar-pac-routing.module';

import { BuscarPacPage } from './buscar-pac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPacPageRoutingModule
  ],
  declarations: [BuscarPacPage]
})
export class BuscarPacPageModule {}
