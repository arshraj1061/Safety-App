import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {
  subscribe: any;

  constructor(public platform: Platform) {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "HomescreenPage")
      {
        if(window.confirm("Do you want to exit the app ?")){
          navigator["app"].exitApp();
        }
      }
    }
    )
   }

  ngOnInit() {
  }

  // async harassment(){

  // }

}
