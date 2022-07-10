import { Component, OnInit,ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-fire-incident',
  templateUrl: './fire-incident.page.html',
  styleUrls: ['./fire-incident.page.scss'],
})
export class FireIncidentPage implements OnInit {

  latitude:any= 0;
  longitude:any= 0;
  contacts: any;
  phone:any;

  public text: string;
  public from: string;
  public to: string;
  
  items : Observable<any[]>;
  itemsRef: AngularFirestoreCollection;

  constructor(
    public firestore: AngularFirestore,
    private http: HttpClient,
    private alert: AlertController,
    private callNumber: CallNumber) { }

  ngOnInit() {
    this.firestore.collection('contacts')
    .valueChanges({idField: 'contact_id'})
    .subscribe(contact => {
      this.contacts = contact;
    })
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
