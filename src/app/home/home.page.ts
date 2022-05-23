import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscribe: any;

  constructor(public platform: Platform) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "HomePage")
      {
        if(window.confirm("Do you want to exit the app ?")){
          navigator["app"].exitApp();
        }
      }
    }
    )
  }

}
