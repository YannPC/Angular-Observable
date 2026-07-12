import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ObersableModalData } from '../obersable-data/obersable-modal-data';
import { ObservablePage } from '../page/observable-page';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ObersableModalData, ObservablePage, RouterOutlet],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
