import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BantuanDosenPage } from './bantuan-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: BantuanDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BantuanDosenPageRoutingModule {}
