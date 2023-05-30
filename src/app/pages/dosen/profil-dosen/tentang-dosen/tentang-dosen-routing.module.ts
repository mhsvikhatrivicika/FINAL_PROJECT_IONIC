import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangDosenPage } from './tentang-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: TentangDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangDosenPageRoutingModule {}
