import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDosenPageRoutingModule } from './home-dosen-routing.module';

import { HomeDosenPage } from './home-dosen.page';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDosenPageRoutingModule,
  ],
  declarations: [HomeDosenPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeDosenPageModule {}
