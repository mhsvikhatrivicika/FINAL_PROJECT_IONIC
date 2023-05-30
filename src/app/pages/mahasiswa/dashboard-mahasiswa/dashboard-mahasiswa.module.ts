import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardMahasiswaPageRoutingModule } from './dashboard-mahasiswa-routing.module';

import { DashboardMahasiswaPage } from './dashboard-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardMahasiswaPageRoutingModule
  ],
  declarations: [DashboardMahasiswaPage]
})
export class DashboardMahasiswaPageModule {}
