import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMahasiswaPage } from './tabs-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: TabsMahasiswaPage,
    children: [
      {
        path: 'dashboard-mahasiswa',
        loadChildren: () =>
          import('../dashboard-mahasiswa/dashboard-mahasiswa.module').then(
            (m) => m.DashboardMahasiswaPageModule
          ),
      },
      {
        path: 'home-mahasiswa',
        loadChildren: () =>
          import('../home-mahasiswa/home-mahasiswa.module').then(
            (m) => m.HomeMahasiswaPageModule
          ),
      },
      {
        path: 'profil-mahasiswa',
        loadChildren: () =>
          import('../profil-mahasiswa/profil-mahasiswa.module').then(
            (m) => m.ProfilMahasiswaPageModule
          ),
      },
      {
        path: 'scan-mahasiswa',
        loadChildren: () =>
          import('../scan-mahasiswa/scan-mahasiswa.module').then(
            (m) => m.ScanMahasiswaPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs-mahasiswa/home-mahasiswa',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMahasiswaPageRoutingModule {}
