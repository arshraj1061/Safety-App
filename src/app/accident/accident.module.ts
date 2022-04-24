import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentPageRoutingModule } from './accident-routing.module';

import { AccidentPage } from './accident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentPageRoutingModule
  ],
  declarations: [AccidentPage]
})
export class AccidentPageModule {}
