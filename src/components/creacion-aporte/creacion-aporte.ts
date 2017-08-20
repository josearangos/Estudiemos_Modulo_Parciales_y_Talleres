import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
//Import firebase
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';

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

  //image: string = null;
  //dependencias y materias que estaran dadaso por firebase
  //dependencias = ["a","b","c"];
  dependencias;
  materias;
  imagenes = [];//Contiene las imagenes del usuario
  ngDependencia = "Ingenieria";
  ngMateria;
  facultad;
  /*
  test firebase add
  */
  objetRef$:FirebaseListObservable<any>;

  constructor(private camera: Camera, private database:AngularFireDatabase, public navParams: NavParams) {
    this.facultad=navParams.get("facultad");
    console.log(this.facultad);
    this.objetRef$ = this.database.list('Dependencia');

    this.initializeItems();
  }

  initializeItems(){
    this.dependencias = [];
    this.objetRef$.forEach(element => {
      element.forEach(dep => {
        this.dependencias.push(dep.$key);
      });
     });
    this.cambiarMaterias();
  }

  cambiarMaterias(){
    console.log("qeq");
    /*this.objetRef$=this.database.list('Materias/'+this.ngDependencia);
    this.materias = [];
    this.objetRef$.forEach(element => {
      element.forEach(a => {
        // se agregar las materias al vector
        this.materias.push(a.name);
      });
     });*/
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      //this.image = `data:image/jpeg;base64,${imageData}`;
      this.imagenes.push(`data:image/jpeg;base64,${imageData}`);
    })
    .catch(error =>{
      console.error( error );
    });
  }

  setAporte(){

  }



}
