import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {Platform} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import {Observable} from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-accident',
  templateUrl: './accident.page.html',
  styleUrls: ['./accident.page.scss'],
})
export class AccidentPage implements OnInit {

  latitude:any= 0;
  longitude:any= 0;
  contacts: any;

  public text: string;
  public from: string;
  public to: string;
  
  @ViewChild("map")  mapElement;
  private map: any;
  alert: any;
  http: any;

  items : Observable<any[]>;
  itemsRef: AngularFirestoreCollection;

  constructor(  private geolocation: Geolocation,
    public firestore: AngularFirestore,
    private callNumber: CallNumber

    ) {
    this.map = null;
  }
  ngOnInit() {
    this.getCurrentCoordinates();
    this.firestore.collection('contacts')
    .valueChanges({idField: 'contact_id'})
    .subscribe(contact => {
      this.contacts = contact;
    })
  }

  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };

  // use geolocation to get user's device coordinates
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

  public sendSms() {
   
    const payload =  new HttpParams()
      .set('from', this.from)
      .set('to', this.to)
      .set('text', `Please HELP me !! I am in DANGER !! My location is : ` + `http://www.google.com/maps/place/`+ this.latitude +`,`+this.longitude);

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
    this.callNumber.callNumber("7870851359", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
