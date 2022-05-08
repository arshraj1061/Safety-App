import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {Platform} from '@ionic/angular';
// import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-accident',
  templateUrl: './accident.page.html',
  styleUrls: ['./accident.page.scss'],
})
export class AccidentPage implements OnInit {
  // route
  @ViewChild("map")  mapElement;
  private map: any;
  
  // marker:any="";
  latitude:any= 0;
  longitude:any= 0;
  // timestamp: any="";

  constructor(  private geolocation: Geolocation) {
    this.map = null;
  }
  ngOnInit() {
    // this.initMap();
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
  // startTracking(){}
  // showHistoryRoute(){}

}
