import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanMahasiswaPage } from './scan-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: ScanMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanMahasiswaPageRoutingModule {}
