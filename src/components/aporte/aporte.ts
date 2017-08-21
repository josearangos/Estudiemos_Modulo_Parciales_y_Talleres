//* prueba para subir aporte
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';//Import storage

/**
 * Generated class for the AporteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'aporte',
  templateUrl: 'aporte.html'
})
export class AporteComponent {
  public imagenes :any[];

  //* variable de la base datos
  aportes$:FirebaseListObservable<any>;
  fotos$:FirebaseListObservable<any>;

  public materia;
  public facultad;
  public aportes = [];
  public temas:any[]=[];
  public ruta:any;
  public rutaFoto:any;
  public t;
  public d;
  fbStorage;
  fbStorageRef;

   //* firebaseDatabase agregar constructor
  constructor(public navCtrl: NavController,public navParams: NavParams, private database:AngularFireDatabase, app: FirebaseApp) {
    this.materia=navParams.get("materia");
    this.facultad=navParams.get("dependencia");
    this.ruta="Aportes/Dependencia/"+this.facultad+"/Materias/"+this.materia;
    this.aportes$=this.database.list(this.ruta);
    this.fbStorage = app.storage();
    this.getAportes();


  }

getItems(ev: any) {
    this.getAportes();
    // set val to the value of the searchbar
    let val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.aportes = this.aportes.filter((item) => {
            return (item.tema.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
}

// obtener los aportes de las personas relacionadas con las materias.
getAportes(){
   this.aportes=[];
   this.temas=[];
   this.aportes$.forEach(element => {
    element.forEach(a=>{
      for (var arr in a.fotos) {//Mete a la parte visual cada aporte
        this.guardarAporte(a.fotos[arr], a);
      }
  });
 });
}

guardarAporte(arrImgs, json){
  //Captura todas las imagenes, cuando inicia crea el aporte,
  //cuando continua con el proceso solo reescribe el aporte en foto
  for (var e in arrImgs) {
    //directorio en el storage
    var directorio = 'Aportes/Dependencia/'+this.facultad+"/Materias/"+this.materia+"/"+json.$key+"/"+e.toString();
    //var gsURL = arrImgs[e];
    //Referencia del storage
    this.fbStorageRef = this.fbStorage.ref(directorio);
    //this.fbStorageRef = this.fbStorage.refFromURL(gsURL);
    //Obtiene el URL de descarga para mostrar en pantalla
    this.fbStorageRef.getDownloadURL().then(url => {
      var bool = true;
      var aux;
      //Verifica que el extista el aporte en la parte visual
      for (var index in this.aportes) {
        if (this.aportes[index].key == json.$key) {
          bool = false;
          aux = index;
          break;
        }
      }
      //Si existe solo agrega foto
      if (!bool) {//SI EXISTE
        this.aportes[aux]['foto'].push(url);
      }else{//NO EXISTE
        let aport:any={
        tema:json.tema,
        descripcion:json.descripcion,
        foto: [url],
        key : json.$key
        }
        this.aportes.push(aport);
      }
      });
    }
  }
}
