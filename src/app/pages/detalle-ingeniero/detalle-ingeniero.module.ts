import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleIngenieroPageRoutingModule } from './detalle-ingeniero-routing.module';

import { DetalleIngenieroPage } from './detalle-ingeniero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleIngenieroPageRoutingModule
  ],
  declarations: [DetalleIngenieroPage]
})
export class DetalleIngenieroPageModule {}
