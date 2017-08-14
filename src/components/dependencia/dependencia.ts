import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { ZonaAporteComponent } from "../zona-aporte/zona-aporte";

// import module firebase database
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';


/**
 * Generated class for the DependenciaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: "dependencia",
  templateUrl: "dependencia.html"
})
export class DependenciaComponent {
  text: string;
  // object observation of the bd
  objetRef$:FirebaseListObservable<any>;



   constructor(public navCtrl: NavController,public navParams: NavParams, private database:AngularFireDatabase
  ) {
  // referencia bd
    this.objetRef$=this.database.list('Dependencia');
  }

zonaDeAportes(depen:string){
  this.navCtrl.push(ZonaAporteComponent,{facultad:depen});
}
}
