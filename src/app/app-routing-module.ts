import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ObersableModalData } from '../obersable-modal-data/obersable-modal-data';

import { ObservablePage } from '../page/observable-page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../obersable-main-page/obsersable-main-page.route').then((m) => m.routes),
  },
  {
    path: 'observable-page',
    loadChildren: () => import('../page/obsersable-page-route').then((m) => m.routes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ObersableModalData, ObservablePage, RouterOutlet],
  exports: [RouterModule],
})
export class AppRoutingModule {}
