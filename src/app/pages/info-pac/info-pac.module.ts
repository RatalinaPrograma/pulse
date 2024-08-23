import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPacPageRoutingModule } from './info-pac-routing.module';

import { InfoPacPage } from './info-pac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPacPageRoutingModule
  ],
  declarations: [InfoPacPage]
})
export class InfoPacPageModule {}
