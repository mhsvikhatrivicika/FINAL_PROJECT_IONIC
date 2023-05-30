import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilDosenPage } from './profil-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilDosenPage
  },
  {
    path: 'pengaturan-akun-dosen',
    loadChildren: () => import('./pengaturan-akun-dosen/pengaturan-akun-dosen.module').then( m => m.PengaturanAkunDosenPageModule)
  },
  {
    path: 'bantuan-dosen',
    loadChildren: () => import('./bantuan-dosen/bantuan-dosen.module').then( m => m.BantuanDosenPageModule)
  },
  {
    path: 'tentang-dosen',
    loadChildren: () => import('./tentang-dosen/tentang-dosen.module').then( m => m.TentangDosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilDosenPageRoutingModule {}
