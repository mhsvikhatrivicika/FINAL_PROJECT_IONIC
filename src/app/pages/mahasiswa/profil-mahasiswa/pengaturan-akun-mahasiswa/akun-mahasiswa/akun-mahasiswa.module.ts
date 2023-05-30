import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkunMahasiswaPageRoutingModule } from './akun-mahasiswa-routing.module';

import { AkunMahasiswaPage } from './akun-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkunMahasiswaPageRoutingModule
  ],
  declarations: [AkunMahasiswaPage]
})
export class AkunMahasiswaPageModule {}
