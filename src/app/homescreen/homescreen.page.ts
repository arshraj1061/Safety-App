import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {
  subscribe: any;

  constructor(
    private platform: Platform,
    private router: Router
) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
        const url = this.router.url;
    
        if (url === '/tabs/not-home') {
            this.router.navigate(['/tabs/home']);
        } else if (url === '/tabs/home') {
          navigator["app"].exitApp();
        }
    });
}

  ngOnInit() {
  }
}
