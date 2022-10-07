import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleIngenieroPage } from './detalle-ingeniero.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleIngenieroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleIngenieroPageRoutingModule {}
