import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';
import { ReturnedPageComponent } from './returned-page/returned-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'digitalsign', component: IframeComponent},
  {path: 'returned', component: ReturnedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
