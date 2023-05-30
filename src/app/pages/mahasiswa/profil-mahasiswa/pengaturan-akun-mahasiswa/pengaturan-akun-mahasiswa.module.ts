import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanAkunMahasiswaPageRoutingModule } from './pengaturan-akun-mahasiswa-routing.module';

import { PengaturanAkunMahasiswaPage } from './pengaturan-akun-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanAkunMahasiswaPageRoutingModule
  ],
  declarations: [PengaturanAkunMahasiswaPage]
})
export class PengaturanAkunMahasiswaPageModule {}
