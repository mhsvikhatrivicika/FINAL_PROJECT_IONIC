import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMahasiswaPage } from './dashboard-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMahasiswaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMahasiswaPageRoutingModule {}
