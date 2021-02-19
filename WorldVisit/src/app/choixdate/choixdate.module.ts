import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixdatePageRoutingModule } from './choixdate-routing.module';

import { ChoixdatePage } from './choixdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixdatePageRoutingModule
  ],
  declarations: [ChoixdatePage]
})
export class ChoixdatePageModule {}
