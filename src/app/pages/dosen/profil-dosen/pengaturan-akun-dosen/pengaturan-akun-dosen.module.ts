import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanAkunDosenPageRoutingModule } from './pengaturan-akun-dosen-routing.module';

import { PengaturanAkunDosenPage } from './pengaturan-akun-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanAkunDosenPageRoutingModule
  ],
  declarations: [PengaturanAkunDosenPage]
})
export class PengaturanAkunDosenPageModule {}
