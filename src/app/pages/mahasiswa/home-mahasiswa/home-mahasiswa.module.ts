import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMahasiswaPageRoutingModule } from './home-mahasiswa-routing.module';

import { HomeMahasiswaPage } from './home-mahasiswa.page';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMahasiswaPageRoutingModule
  ],
  declarations: [HomeMahasiswaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeMahasiswaPageModule {}
