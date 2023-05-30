import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BantuanMahasiswaPageRoutingModule } from './bantuan-mahasiswa-routing.module';

import { BantuanMahasiswaPage } from './bantuan-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BantuanMahasiswaPageRoutingModule
  ],
  declarations: [BantuanMahasiswaPage]
})
export class BantuanMahasiswaPageModule {}
