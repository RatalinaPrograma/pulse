import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'buscar-pac',
    loadChildren: () => import('./pages/buscar-pac/buscar-pac.module').then( m => m.BuscarPacPageModule)
  },
  {
    path: 'info-pac',
    loadChildren: () => import('./pages/info-pac/info-pac.module').then( m => m.InfoPacPageModule)
  },
  {
    path: 'paramedico',
    loadChildren: () => import('./pages/paramedico/paramedico.module').then( m => m.ParamedicoPageModule)
  },
  {
    path: 'informe-sintomas',
    loadChildren: () => import('./pages/informe-sintomas/informe-sintomas.module').then( m => m.InformeSintomasPageModule)
  },
  {
    path: 'signos-vit',
    loadChildren: () => import('./pages/signos-vit/signos-vit.module').then( m => m.SignosVitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
