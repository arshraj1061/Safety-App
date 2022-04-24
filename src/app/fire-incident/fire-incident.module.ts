import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireIncidentPageRoutingModule } from './fire-incident-routing.module';

import { FireIncidentPage } from './fire-incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireIncidentPageRoutingModule
  ],
  declarations: [FireIncidentPage]
})
export class FireIncidentPageModule {}
