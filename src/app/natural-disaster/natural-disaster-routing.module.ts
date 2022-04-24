import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaturalDisasterPage } from './natural-disaster.page';

const routes: Routes = [
  {
    path: '',
    component: NaturalDisasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaturalDisasterPageRoutingModule {}
