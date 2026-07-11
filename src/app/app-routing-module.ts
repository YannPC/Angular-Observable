import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObersableData } from '../obersable-data/obersable-data';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ObersableData],
  exports: [RouterModule],
})
export class AppRoutingModule {}
