import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajoutpays',
    loadChildren: () => import('./ajoutpays/ajoutpays.module').then( m => m.AjoutpaysPageModule)
  },
  {
    path: 'choixdate',
    loadChildren: () => import('./choixdate/choixdate.module').then( m => m.ChoixdatePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
