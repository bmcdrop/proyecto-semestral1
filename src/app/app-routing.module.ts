import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'detalle-ingeniero',
    redirectTo: 'detalle-ingeniero',
    pathMatch: 'full'
  },
  {
    path: 'conversor',
    redirectTo: 'conversor',
    pathMatch: 'full'
  },
  {
    path: 'formulario-registro',
    redirectTo: 'formulario-registro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'detalle-ingeniero',
    loadChildren: () => import('./pages/detalle-ingeniero/detalle-ingeniero.module').then( m => m.DetalleIngenieroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },

  {
    path: 'conversor',
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {  })
  ],
  providers:[
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
