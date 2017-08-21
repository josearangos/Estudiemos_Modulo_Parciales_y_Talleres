import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
//Import firebase
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';//Import storage
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

  materias;//materias de {{facultad}}
  imagenes = [];//Contiene las imagenes del usuario "vista"
  storageImgs = [];//Contiene las imgs que se van a guardar "formato"
  ngMateria;//materia elejida
  ngTema = "";//Tema entrado
  ngDescripcion = "";//Descripcion entrado
  facultad;//facultad en la que se encuentra
  fbStorage;
  fbStorageRef;
  /*
  test firebase add
  */
  objetRef$:FirebaseListObservable<any>;

  constructor(private camera: Camera, private database:AngularFireDatabase, public navParams: NavParams, app: FirebaseApp, public navCtrl: NavController) {
    this.facultad=navParams.get("facultad");
    console.log(this.facultad);
    this.objetRef$=this.database.list('Aportes/Dependencia/'+this.facultad+"/Materias");
    this.fbStorage = app.storage();
    this.initializeItems();
  }

  initializeItems(){//trae las materias de fb y las pone en la vista
    this.materias = [];
    this.objetRef$.forEach(element => {
      element.forEach(a => {
        // se agregar las materias al vector
        this.materias.push(a.name);
      });
     });
  }

  getPicture(){//Obtiene las imgs que el usuario tome
    let options: CameraOptions = {//Conf de la camara
      quality : 75,
      destinationType : this.camera.DestinationType.DATA_URL,
      sourceType : this.camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture( options ).then(imageData => {//Obtiene la img
      this.imagenes.push(`data:image/jpeg;base64,${imageData}`);//vista
      this.storageImgs.push(imageData);//almacenamiento
    })
    .catch(error =>{
      console.error( error );
    });
  }

  setAporte(){
    //Incerta en la bd
    var directorio = 'Aportes/Dependencia/'+this.facultad+"/Materias/"+this.ngMateria;
    this.objetRef$=this.database.list(directorio);
    var key = this.objetRef$.push({
      materia: this.ngMateria,
      tema: this.ngTema,
      descripcion : this.ngDescripcion
    }).key;
    //incerta las imgs en storage bd manteniendo el directorio de la bd
    directorio = directorio+"/"+key;
    var linksImgs = [];
    for(var cont = 0; cont < this.storageImgs.length;cont++){
      this.fbStorageRef = this.fbStorage.ref().child(directorio+"/"+cont.toString());
      this.fbStorageRef.putString(this.storageImgs[cont], 'base64').then(function(snapshot) {
      });
      linksImgs.push("gs://estudiemos-e06c3.appspot.com/"+directorio+"/"+cont.toString())
    }
    //Actualizo la bd con los enlaces de las fotos
    this.objetRef$=this.database.list(directorio);
    this.objetRef$.update("fotos",{
      array: linksImgs
    });
    alert("Aporte enviado");
    this.navCtrl.pop();
  }
}
