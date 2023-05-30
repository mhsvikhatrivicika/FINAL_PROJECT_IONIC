import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GantiPasswordDosenPageRoutingModule } from './ganti-password-dosen-routing.module';

import { GantiPasswordDosenPage } from './ganti-password-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GantiPasswordDosenPageRoutingModule
  ],
  declarations: [GantiPasswordDosenPage]
})
export class GantiPasswordDosenPageModule {}
