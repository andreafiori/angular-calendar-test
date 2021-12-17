import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarDemoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
