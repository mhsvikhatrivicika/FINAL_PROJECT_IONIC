import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkunDosenPage } from './akun-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: AkunDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkunDosenPageRoutingModule {}
