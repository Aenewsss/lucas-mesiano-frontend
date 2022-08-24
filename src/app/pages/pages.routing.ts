import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages.component';

const pagesRoute: Routes = [
  { path: '', component: PagesComponent },
  { path: 'sobre-mim', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoute)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
