import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: string = "";
  
  constructor(private router: Router,
    private afAuth:AngularFireAuth) { }

  ngOnInit() {
    
  }

  forgot(email : string){
      return this.afAuth.sendPasswordResetEmail(email).then((err) =>{
        alert( `Reset link sent to ${email}`)
      })
  }

}
