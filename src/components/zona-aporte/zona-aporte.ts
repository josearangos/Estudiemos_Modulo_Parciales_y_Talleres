import { CreacionAporteComponent } from './../creacion-aporte/creacion-aporte';
import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
// import module firebase database
import { AporteComponent } from '../../components/aporte/aporte';

import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
/**
 * Generated class for the ZonaAporteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'zona-aporte',
  templateUrl: 'zona-aporte.html'
})
export class ZonaAporteComponent {

  public facultad;
  /*
   test firebase add
  */
  objetRef$:FirebaseListObservable<any>;

  // array que contiene las materias
  items: any[]=[];

  constructor(public navCtrl: NavController,public navParams: NavParams,
    private database:AngularFireDatabase,
  ) {

    // variable que contiene la dependencias que se escogio
     this.facultad=navParams.get("facultad");
     // objetRef es el objeto que observa la base de datos nodo de materias
     let ruta='Aportes/Depedencia/'+this.facultad+'/Materias/QuimicaI/';
     this.objetRef$=this.database.list(ruta);
     //initializar el vector de las materias

     this.initializeItems();
  }

  // crear el vector con las materias
  initializeItems() {
     this.items=[];
     // se recorre el vector JSON
    this.objetRef$.forEach(element => {
      console.log("----- "+element.name);
      element.forEach(a => {
        console.log(a);

        // se agregar las materias al vector
        this.items.push(a.name);
      });
     });
  }


  // metodo de filtro de palabras
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  irCreacionAporte(){
    this.navCtrl.push(CreacionAporteComponent,{facultad:this.facultad});
  }

  goToAportes(mate:string){
    this.navCtrl.push(AporteComponent,{materia:mate});
  }


}
