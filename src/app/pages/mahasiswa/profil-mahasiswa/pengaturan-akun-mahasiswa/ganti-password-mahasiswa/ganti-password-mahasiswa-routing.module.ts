import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GantiPasswordMahasiswaPage } from './ganti-password-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: GantiPasswordMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GantiPasswordMahasiswaPageRoutingModule {}
