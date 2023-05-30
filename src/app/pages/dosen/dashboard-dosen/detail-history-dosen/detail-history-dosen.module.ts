import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailHistoryDosenPageRoutingModule } from './detail-history-dosen-routing.module';

import { DetailHistoryDosenPage } from './detail-history-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHistoryDosenPageRoutingModule
  ],
  declarations: [DetailHistoryDosenPage]
})
export class DetailHistoryDosenPageModule {}
