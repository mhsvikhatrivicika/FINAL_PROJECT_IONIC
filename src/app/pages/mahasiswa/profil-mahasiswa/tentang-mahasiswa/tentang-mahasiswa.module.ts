import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TentangMahasiswaPageRoutingModule } from './tentang-mahasiswa-routing.module';

import { TentangMahasiswaPage } from './tentang-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentangMahasiswaPageRoutingModule
  ],
  declarations: [TentangMahasiswaPage]
})
export class TentangMahasiswaPageModule {}
