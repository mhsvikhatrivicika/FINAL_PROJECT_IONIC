import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilDosenPageRoutingModule } from './profil-dosen-routing.module';

import { ProfilDosenPage } from './profil-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilDosenPageRoutingModule
  ],
  declarations: [ProfilDosenPage]
})
export class ProfilDosenPageModule {}
