import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeSintomasPageRoutingModule } from './informe-sintomas-routing.module';

import { InformeSintomasPage } from './informe-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeSintomasPageRoutingModule
  ],
  declarations: [InformeSintomasPage]
})
export class InformeSintomasPageModule {}
