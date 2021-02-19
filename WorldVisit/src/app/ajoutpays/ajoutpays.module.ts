import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutpaysPageRoutingModule } from './ajoutpays-routing.module';

import { AjoutpaysPage } from './ajoutpays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutpaysPageRoutingModule
  ],
  declarations: [AjoutpaysPage]
})
export class AjoutpaysPageModule {}
