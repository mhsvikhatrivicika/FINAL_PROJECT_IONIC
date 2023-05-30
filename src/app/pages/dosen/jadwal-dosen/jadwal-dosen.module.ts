import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalDosenPageRoutingModule } from './jadwal-dosen-routing.module';

import { JadwalDosenPage } from './jadwal-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalDosenPageRoutingModule
  ],
  declarations: [JadwalDosenPage]
})
export class JadwalDosenPageModule {}
