import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanDosenPage } from './scan-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: ScanDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanDosenPageRoutingModule {}
