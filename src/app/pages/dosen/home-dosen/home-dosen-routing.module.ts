import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDosenPage } from './home-dosen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDosenPageRoutingModule {}
