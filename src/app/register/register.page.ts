import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  [x: string]: any;
  name: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = "";
  phone: number;
  gender: string = "";
  constructor(
    public modalCtrl: ModalController,
    private arsh: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit() { }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
  async register() {
    const { password, cpassword, email } = this;
    if (cpassword !== password) {
      alert(`Passwords did not match!`)
      return console.dir("Password didnt match")
    }

    try {
      const user = await this.arsh.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user)
    }
    catch (err) {
      console.dir(`ERROR ${err}`)
    }
  }

   already() {
    this.dismiss()
    //  this.router.navigateByUrl("/login",{
    //   replaceUrl : true
    // })

  }

}
