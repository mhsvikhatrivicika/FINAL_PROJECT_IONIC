import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GantiPasswordMahasiswaPageRoutingModule } from './ganti-password-mahasiswa-routing.module';

import { GantiPasswordMahasiswaPage } from './ganti-password-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GantiPasswordMahasiswaPageRoutingModule
  ],
  declarations: [GantiPasswordMahasiswaPage]
})
export class GantiPasswordMahasiswaPageModule {}
