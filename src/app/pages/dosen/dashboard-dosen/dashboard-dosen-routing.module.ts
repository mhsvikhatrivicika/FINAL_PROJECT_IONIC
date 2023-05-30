import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDosenPage } from './dashboard-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardDosenPage
  },
  {
    path: 'detail-history-dosen',
    loadChildren: () => import('./detail-history-dosen/detail-history-dosen.module').then( m => m.DetailHistoryDosenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardDosenPageRoutingModule {}
