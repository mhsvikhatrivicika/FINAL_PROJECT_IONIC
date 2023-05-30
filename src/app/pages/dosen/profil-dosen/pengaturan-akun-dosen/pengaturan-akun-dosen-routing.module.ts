import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanAkunDosenPage } from './pengaturan-akun-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanAkunDosenPage
  },
  {
    path: 'akun-dosen',
    loadChildren: () => import('./akun-dosen/akun-dosen.module').then( m => m.AkunDosenPageModule)
  },
  {
    path: 'ganti-password-dosen',
    loadChildren: () => import('./ganti-password-dosen/ganti-password-dosen.module').then( m => m.GantiPasswordDosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanAkunDosenPageRoutingModule {}
