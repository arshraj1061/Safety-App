import { Component, OnInit } from '@angular/core';
import { DestinationType } from '@awesome-cordova-plugins/camera';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from '../../environments/environment';

// import { Twilio } from "twilio";
// import * as twilio from 'twilio'

// const accountSid = environment.TWILIO_ACCOUNT_SID;
// const authToken = environment.TWILIO_AUTH_TOKEN;
// const twilioNumber = "+12395108844"

@Component({
  selector: 'app-harassment',
  templateUrl: './harassment.page.html',
  styleUrls: ['./harassment.page.scss'],
})

export class HarassmentPage implements OnInit {

  imgURL;

  constructor(
    private camera: Camera,
    public firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  getCamera(){
          this.camera.getPicture({
            sourceType : this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI
          }).then((res) =>{
            this.imgURL = 'data:image/jpeg;base64,' + res;
          }).catch(e =>{
            console.log(`error: ${e}`)
          })
  }

  getGallery(){
    this.camera.getPicture({
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((res) =>{
      this.imgURL = res;
    }).catch(e =>{
      console.log(`error: ${e}`)
    })
  }

  // sendAlert(){

  //   // function validE164(num) {
  //   //   return /^\+?[1-9]\d{1,14}$/.test(num)
  //   // }

  //   if (accountSid && authToken  && twilioNumber) {
  //     const client = new Twilio(accountSid, authToken);
    
  //     client.messages
  //       .create({
  //         from: twilioNumber,
  //         to: "+917870851359",
  //         body: "Hey there from Safety App!!! Woah!!!",
  //       })
  //       .then((message) => console.log(message.sid));
  //   } else {
  //     console.error(
  //       "You are missing one of the variables you need to send a message"
  //     );
  //   }
    
  // }


}
