import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import  firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
// import {environment} from 'src/environments/environment';
import firebaseConfig from './firebase';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireAuthModule,    

    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {}
