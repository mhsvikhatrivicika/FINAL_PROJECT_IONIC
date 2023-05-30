import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDosenPageRoutingModule } from './home-dosen-routing.module';

import { HomeDosenPage } from './home-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDosenPageRoutingModule
  ],
  declarations: [HomeDosenPage]
})
export class HomeDosenPageModule {}
