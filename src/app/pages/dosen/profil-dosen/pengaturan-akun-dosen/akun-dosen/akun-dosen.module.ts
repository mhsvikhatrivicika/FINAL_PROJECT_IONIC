import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkunDosenPageRoutingModule } from './akun-dosen-routing.module';

import { AkunDosenPage } from './akun-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkunDosenPageRoutingModule
  ],
  declarations: [AkunDosenPage]
})
export class AkunDosenPageModule {}
