import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FireserviceService } from "../fireservice.service";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public fireService: FireserviceService,
    private afAuth:AngularFireAuth
  ) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  donthave(){
    this.router.navigateByUrl("/register",{
      replaceUrl: true
    })
  }

  forgot(){
  this.router.navigateByUrl("/forgot",{
    replaceUrl:true
  }).then((s) =>{
    this.dismiss();
  })
 }

  async login() {
    const { email, password } = this;
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password)
      // alert("Log in successful!")
        this.router.navigateByUrl("/homescreen",{
        replaceUrl:true
      })
      this.dismiss()
    } catch (err) {
      console.dir(err);
      alert("Invalid Email or Password!!")
      this.dismiss();
    }
  }

 
}
