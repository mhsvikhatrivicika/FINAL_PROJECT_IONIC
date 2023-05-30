import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangMahasiswaPage } from './tentang-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: TentangMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangMahasiswaPageRoutingModule {}
