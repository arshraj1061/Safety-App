import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    private afAuth:AngularFireAuth
  ) { }

  ngOnInit() {
  }
  
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  forgot(){
    this.router.navigateByUrl("/forgot",{
      replaceUrl:true
    }).then((s) =>{
      this.dismiss();
    })
   }
  
  // emm(){
  //   this.router.navigateByUrl("/emergency-contacts",{
  //     replaceUrl:true
  //   }).then((s) =>{
  //     this.dismiss();
  //   })
  // }

  logout(){
    return this.afAuth.signOut().then(()=>{
      alert(`Signed out successfully`);
      // console.log('logout')
    })
    
  }


}
