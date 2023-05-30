import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsDosenPageRoutingModule } from './tabs-dosen-routing.module';

import { TabsDosenPage } from './tabs-dosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsDosenPageRoutingModule
  ],
  declarations: [TabsDosenPage]
})
export class TabsDosenPageModule {}
