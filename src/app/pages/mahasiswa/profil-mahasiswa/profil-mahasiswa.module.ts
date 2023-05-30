import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilMahasiswaPageRoutingModule } from './profil-mahasiswa-routing.module';

import { ProfilMahasiswaPage } from './profil-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilMahasiswaPageRoutingModule
  ],
  declarations: [ProfilMahasiswaPage]
})
export class ProfilMahasiswaPageModule {}
