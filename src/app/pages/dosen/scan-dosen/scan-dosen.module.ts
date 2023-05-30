import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanDosenPageRoutingModule } from './scan-dosen-routing.module';

import { ScanDosenPage } from './scan-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanDosenPageRoutingModule
  ],
  declarations: [ScanDosenPage]
})
export class ScanDosenPageModule {}
