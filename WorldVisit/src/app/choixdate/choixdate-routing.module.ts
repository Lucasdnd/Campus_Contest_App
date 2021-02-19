import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixdatePage } from './choixdate.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixdatePageRoutingModule {}
