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
  {
    path: 'reg-paramedico',
    loadChildren: () => import('./pages/reg-paramedico/reg-paramedico.module').then( m => m.RegParamedicoPageModule)
  },
  {
    path: 'eliminar-para',
    loadChildren: () => import('./pages/eliminar-para/eliminar-para.module').then( m => m.EliminarParaPageModule)
  },
  {
    path: 'reg-paciente',
    loadChildren: () => import('./pages/reg-paciente/reg-paciente.module').then( m => m.RegPacientePageModule)
  },
  {
    path: 'mod-paciente',
    loadChildren: () => import('./pages/mod-paciente/mod-paciente.module').then( m => m.ModPacientePageModule)
  },
  {
    path: 'mod-paramedico',
    loadChildren: () => import('./pages/mod-paramedico/mod-paramedico.module').then( m => m.ModParamedicoPageModule)
  },
  {
    path: 'el-paciente',
    loadChildren: () => import('./pages/el-paciente/el-paciente.module').then( m => m.ElPacientePageModule)
  },
  {
    path: 'nivel-urgencia',
    loadChildren: () => import('./pages/nivel-urgencia/nivel-urgencia.module').then( m => m.NivelUrgenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
