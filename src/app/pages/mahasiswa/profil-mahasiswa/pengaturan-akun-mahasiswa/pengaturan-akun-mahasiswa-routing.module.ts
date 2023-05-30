import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanAkunMahasiswaPage } from './pengaturan-akun-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanAkunMahasiswaPage
  },
  {
    path: 'akun-mahasiswa',
    loadChildren: () => import('./akun-mahasiswa/akun-mahasiswa.module').then( m => m.AkunMahasiswaPageModule)
  },
  {
    path: 'ganti-password-mahasiswa',
    loadChildren: () => import('./ganti-password-mahasiswa/ganti-password-mahasiswa.module').then( m => m.GantiPasswordMahasiswaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanAkunMahasiswaPageRoutingModule {}
