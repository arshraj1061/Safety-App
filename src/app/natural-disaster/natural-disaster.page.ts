import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;


@Component({
  selector: 'app-natural-disaster',
  templateUrl: './natural-disaster.page.html',
  styleUrls: ['./natural-disaster.page.scss'],
})
export class NaturalDisasterPage implements OnInit {

  public text: string;
  public from: string;
  public to: string;
  @ViewChild("map")  mapElement;
  private map: any;


  latitude:any= 0;
  longitude:any= 0;

  
  constructor(private http: HttpClient, private alert: AlertController,private geolocation: Geolocation) { }

  public sendSms() {
    const payload = new HttpParams()
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

  ngOnInit() {
    this.getCurrentCoordinates();
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
          mapId : "75cd762b42b04465" 
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
