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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'tabs-dosen',
    loadChildren: () => import('./pages/dosen/tabs-dosen/tabs-dosen.module').then( m => m.TabsDosenPageModule)
  },
  {
    path: 'tabs-mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/tabs-mahasiswa/tabs-mahasiswa.module').then( m => m.TabsMahasiswaPageModule)
  },
  {
    path: 'scan-dosen',
    loadChildren: () => import('./pages/dosen/scan-dosen/scan-dosen.module').then( m => m.ScanDosenPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
