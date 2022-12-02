import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';


import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
