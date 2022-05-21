import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';

import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, SystemsComponent],
  imports: [BrowserModule, HttpClientModule, MatCardModule, NoopAnimationsModule],
  exports: [MatCard],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
