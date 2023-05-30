import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanMahasiswaPageRoutingModule } from './scan-mahasiswa-routing.module';

import { ScanMahasiswaPage } from './scan-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanMahasiswaPageRoutingModule
  ],
  declarations: [ScanMahasiswaPage]
})
export class ScanMahasiswaPageModule {}
