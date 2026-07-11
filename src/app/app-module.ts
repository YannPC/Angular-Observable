import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ObersableData } from '../obersable-data/obersable-data';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ObersableData],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
