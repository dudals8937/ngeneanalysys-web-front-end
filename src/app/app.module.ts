import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModules } from './material.module';

import { AppComponent } from './app.component';

import { LayoutModule } from './components/layout/layout.module';
import { SectionModule } from './components/section/section.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    LayoutModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
