import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardDosenPageRoutingModule } from './dashboard-dosen-routing.module';

import { DashboardDosenPage } from './dashboard-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardDosenPageRoutingModule
  ],
  declarations: [DashboardDosenPage]
})
export class DashboardDosenPageModule {}
