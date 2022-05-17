import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarassmentPageRoutingModule } from './harassment-routing.module';

import { HarassmentPage } from './harassment.page';

import { SMS } from '@ionic-native/sms/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarassmentPageRoutingModule
  ],
  providers: [SMS],
  declarations: [HarassmentPage]
})
export class HarassmentPageModule {}
