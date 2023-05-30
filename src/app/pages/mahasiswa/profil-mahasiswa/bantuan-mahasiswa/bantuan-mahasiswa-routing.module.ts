import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BantuanMahasiswaPage } from './bantuan-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: BantuanMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BantuanMahasiswaPageRoutingModule {}
