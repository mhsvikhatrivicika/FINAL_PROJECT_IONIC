import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TentangDosenPageRoutingModule } from './tentang-dosen-routing.module';

import { TentangDosenPage } from './tentang-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TentangDosenPageRoutingModule
  ],
  declarations: [TentangDosenPage]
})
export class TentangDosenPageModule {}
