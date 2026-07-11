import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ObersableData } from '../obersable-data/obersable-data';
import { ObservablePage } from '../page/observable-page';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ObersableData, ObservablePage, RouterOutlet],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
