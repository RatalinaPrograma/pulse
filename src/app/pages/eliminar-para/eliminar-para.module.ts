import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarParaPageRoutingModule } from './eliminar-para-routing.module';

import { EliminarParaPage } from './eliminar-para.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarParaPageRoutingModule
  ],
  declarations: [EliminarParaPage]
})
export class EliminarParaPageModule {}
