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
    path: 'dashboard-dosen',
    loadChildren: () => import('./pages/dosen/dashboard-dosen/dashboard-dosen.module').then( m => m.DashboardDosenPageModule)
  },
  {
    path: 'jadwal-dosen',
    loadChildren: () => import('./pages/dosen/jadwal-dosen/jadwal-dosen.module').then( m => m.JadwalDosenPageModule)
  },
  {
    path: 'profil-dosen',
    loadChildren: () => import('./pages/dosen/profil-dosen/profil-dosen.module').then( m => m.ProfilDosenPageModule)
  },
  {
    path: 'dashboard-mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/dashboard-mahasiswa/dashboard-mahasiswa.module').then( m => m.DashboardMahasiswaPageModule)
  },
  {
    path: 'tabs-mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/tabs-mahasiswa/tabs-mahasiswa.module').then( m => m.TabsMahasiswaPageModule)
  },
  {
    path: 'profil-mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/profil-mahasiswa/profil-mahasiswa.module').then( m => m.ProfilMahasiswaPageModule)
  },
  {
    path: 'home-dosen',
    loadChildren: () => import('./pages/dosen/home-dosen/home-dosen.module').then( m => m.HomeDosenPageModule)
  },
  {
    path: 'home-mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/home-mahasiswa/home-mahasiswa.module').then( m => m.HomeMahasiswaPageModule)
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
