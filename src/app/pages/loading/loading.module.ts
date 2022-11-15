import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './loading-routing.module';

import { LoadingPage } from './loading.page';
import { Routes,RouterModule } from '@angular/router';


const routes: Routes=[
  {
    path:'',
    component:LoadingPage

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPageRoutingModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
