import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkunMahasiswaPage } from './akun-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: AkunMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkunMahasiswaPageRoutingModule {}
