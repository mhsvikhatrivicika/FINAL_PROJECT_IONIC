import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailHistoryDosenPage } from './detail-history-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: DetailHistoryDosenPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailHistoryDosenPageRoutingModule {}
