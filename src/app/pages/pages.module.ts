import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    PagesComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
