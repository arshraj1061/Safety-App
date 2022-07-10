import { Component, OnInit,ViewChild } from '@angular/core';
import { DestinationType } from '@awesome-cordova-plugins/camera';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { environment } from '../../environments/environment';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import {Observable} from 'rxjs';

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

  imgURL:any;

  public text: string;
  public from: string;
  public to: string;

  contacts: any;
  phone :number;

  items : Observable<any[]>;
  itemsRef: AngularFirestoreCollection;

  constructor(
    private camera: Camera,
    public firestore: AngularFirestore,
    private geolocation: Geolocation,
    private http: HttpClient,
    private alert: AlertController,
    private callNumber: CallNumber,
    
  ) {
    this.map = null;
    this.itemsRef = firestore.collection('contacts')
    this.items = this.itemsRef.valueChanges();
  }

  ngOnInit() {
    const loc = this.getCurrentCoordinates();

    this.firestore.collection('contacts')
    .valueChanges({idField: 'contact_id'})
    .subscribe(contact => {
      this.contacts = contact;
      
    })
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
      // console.log(resp)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  } 

  public async sendSms() {
    this.text = `Pleaseeeeee HELP me !! I am in DANGER !! My location is : ` + `http://www.google.com/maps/place/`+ this.latitude +`,`+this.longitude;
    const payload =  new HttpParams()
      .set('from', this.from)
      .set('to', this.to)
      .set('text', this.text);

    return this.http.post('http://sms.com:3000/send-sms', payload)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.alert.create({ message: 'Oops!'})
            .then((alert) => alert.present());
          return throwError('Oops!');
        }))
      .subscribe(async (resp: any) => {
        const alert = await this.alert.create({ message: resp.message });
        await alert.present();
      });
  }

  call(){
    console.log("calling")
    this.callNumber.callNumber("7870851359", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
