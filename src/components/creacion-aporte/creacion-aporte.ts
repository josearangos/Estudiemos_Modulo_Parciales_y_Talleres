import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CreacionAporteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'creacion-aporte',
  templateUrl: 'creacion-aporte.html'
})
export class CreacionAporteComponent {

  image: string = null;

  constructor(
    private camera: Camera
  ) {}

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }




}
