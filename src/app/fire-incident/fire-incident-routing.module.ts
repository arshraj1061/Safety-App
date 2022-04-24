import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireIncidentPage } from './fire-incident.page';

const routes: Routes = [
  {
    path: '',
    component: FireIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireIncidentPageRoutingModule {}
