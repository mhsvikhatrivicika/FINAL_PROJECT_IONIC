import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilMahasiswaPage } from './profil-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilMahasiswaPage
  },
  {
    path: 'pengaturan-akun-mahasiswa',
    loadChildren: () => import('./pengaturan-akun-mahasiswa/pengaturan-akun-mahasiswa.module').then( m => m.PengaturanAkunMahasiswaPageModule)
  },
  {
    path: 'bantuan-mahasiswa',
    loadChildren: () => import('./bantuan-mahasiswa/bantuan-mahasiswa.module').then( m => m.BantuanMahasiswaPageModule)
  },
  {
    path: 'tentang-mahasiswa',
    loadChildren: () => import('./tentang-mahasiswa/tentang-mahasiswa.module').then( m => m.TentangMahasiswaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilMahasiswaPageRoutingModule {}
