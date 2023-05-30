import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsDosenPage } from './tabs-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: TabsDosenPage,
    children: [
      {
        path: 'home-dosen',
        loadChildren: () => import('../home-dosen/home-dosen.module').then( m => m.HomeDosenPageModule)
      },
      {
        path: 'dashboard-dosen',
        loadChildren: () => import('../dashboard-dosen/dashboard-dosen.module').then( m => m.DashboardDosenPageModule)
      },
      // {
      //   path: 'detail-history-dosen',
      //   loadChildren: () => import('../dashboard-dosen/detail-history-dosen/detail-history-dosen.module').then( m => m.DetailHistoryDosenPageModule)
      // },
      {
        path: 'jadwal-dosen',
        loadChildren: () => import('../jadwal-dosen/jadwal-dosen.module').then( m => m.JadwalDosenPageModule)
      },
      {
        path: 'profil-dosen',
        loadChildren: () => import('../profil-dosen/profil-dosen.module').then( m => m.ProfilDosenPageModule)
      },
      {
        path: 'scan-dosen',
        loadChildren: () => import('../scan-dosen/scan-dosen.module').then( m => m.ScanDosenPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-dosen/home-dosen',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsDosenPageRoutingModule {}
