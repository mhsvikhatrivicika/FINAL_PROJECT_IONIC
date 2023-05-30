import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsMahasiswaPageRoutingModule } from './tabs-mahasiswa-routing.module';

import { TabsMahasiswaPage } from './tabs-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsMahasiswaPageRoutingModule
  ],
  declarations: [TabsMahasiswaPage]
})
export class TabsMahasiswaPageModule {}
