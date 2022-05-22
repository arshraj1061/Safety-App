import { Component, OnInit,ViewChild } from '@angular/core';
import { DestinationType } from '@awesome-cordova-plugins/camera';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from '../../environments/environment';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

import { SMS } from '@awesome-cordova-plugins/sms/ngx';
// import { Twilio } from "twilio";
// import * as twilio from 'twilio'

// const accountSid = environment.TWILIO_ACCOUNT_SID;
// const authToken = environment.TWILIO_AUTH_TOKEN;
// const twilioNumber = "+12395108844"

declare var google: any;


@Component({
  selector: 'app-harassment',
  templateUrl: './harassment.page.html',
  styleUrls: ['./harassment.page.scss'],
})

export class HarassmentPage implements OnInit {

  @ViewChild("map")  mapElement;
  private map: any;
  latitude:any= 0;
  longitude:any= 0;

  imgURL;

  // base64:string = "data:image/png;base64,";

  constructor(
    private camera: Camera,
    public firestore: AngularFirestore,
    private sms: SMS,
    private geolocation: Geolocation,
    // private preview: CameraPreview,
    // private sanitizer: DomSanitizer
  ) {
    this.map = null;
   }

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

  sendAlert(){

    this.sms.send('+917870851359', 'Hello world!');
    
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
  
  }

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  getCurrentCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    
        const coords = new google.maps.LatLng(this.latitude, this.longitude)
        const mapOptions  = {
          center: coords,
          zoom: 15,
          mapTypeId : google.maps.MapTypeId.ROADMAP,

        }
        this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)
         const mark =  new google.maps.Marker({
           map: this.map,
           position : coords
         })
      console.log(resp)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  } 



}
