import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BantuanDosenPageRoutingModule } from './bantuan-dosen-routing.module';

import { BantuanDosenPage } from './bantuan-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BantuanDosenPageRoutingModule
  ],
  declarations: [BantuanDosenPage]
})
export class BantuanDosenPageModule {}
