import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    FeedbacksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
