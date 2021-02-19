import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutpaysPage } from './ajoutpays.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutpaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutpaysPageRoutingModule {}
