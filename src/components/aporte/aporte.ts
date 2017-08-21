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
  public aportes:any[]=[];
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

// obtener los aportes de las personas relacionadas con las materias.
getAportes(){
   this.aportes=[];
   this.temas=[];
   this.aportes$.forEach(element => {
    element.forEach(a=>{
      var fotosL = [];
      for (var arr in a.fotos) {
       for (var e in a.fotos[arr]) {
         var directorio = 'Aportes/Dependencia/'+this.facultad+"/Materias/"+this.materia+"/"+a.$key+"/"+e.toString();
         var gsURL = a.fotos[arr][e];
         console.log("1");
         fotosL.push(this.retorneLinksFoto(directorio, gsURL));

       }
      }
      let aport:any={
      tema:a.tema,
      descripcion:a.Descripcion,
      foto: fotosL
    }

    this.aportes.push(aport);
    aport=[];
  });
 });
 this.aportes.pop();// se saca el ultimo ya que es undefied
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

retorneLinksFoto(directorio, gsURL){
  this.fbStorageRef = this.fbStorage.ref(directorio);
  //this.fbStorageRef = this.fbStorage.refFromURL(gsURL);
  this.fbStorageRef.getDownloadURL().then(function(url) {

  });
}
}
