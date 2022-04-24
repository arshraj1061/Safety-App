import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentPage } from './accident.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentPageRoutingModule {}
