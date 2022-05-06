import { Component, OnInit } from '@angular/core';
import { DestinationType } from '@awesome-cordova-plugins/camera';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-harassment',
  templateUrl: './harassment.page.html',
  styleUrls: ['./harassment.page.scss'],
})
export class HarassmentPage implements OnInit {

  imgURL;

  constructor(
    private camera: Camera
  ) { 
    
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

}
