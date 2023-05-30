import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalDosenPage } from './jadwal-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalDosenPageRoutingModule {}
