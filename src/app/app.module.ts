import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DigitalSignService } from './services/digitalsign.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { ReturnedPageComponent } from './returned-page/returned-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IframeComponent,
    ReturnedPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DigitalSignService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
