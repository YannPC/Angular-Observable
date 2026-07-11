import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ObersableData } from '../obersable-data/obersable-data';

import { Observable } from 'rxjs';
import { ObservablePage } from '../page/observable-page';

const routes: Routes = [
  {
    path: 'observable-page',
    loadChildren: () => import('../page/obsersable-page-route').then((m) => m.routes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ObersableData, ObservablePage, RouterOutlet],
  exports: [RouterModule],
})
export class AppRoutingModule {}
