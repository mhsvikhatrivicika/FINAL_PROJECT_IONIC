import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GantiPasswordDosenPage } from './ganti-password-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: GantiPasswordDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GantiPasswordDosenPageRoutingModule {}
