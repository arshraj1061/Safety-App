import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturalDisasterPageRoutingModule } from './natural-disaster-routing.module';

import { NaturalDisasterPage } from './natural-disaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturalDisasterPageRoutingModule
  ],
  declarations: [NaturalDisasterPage]
})
export class NaturalDisasterPageModule {}
