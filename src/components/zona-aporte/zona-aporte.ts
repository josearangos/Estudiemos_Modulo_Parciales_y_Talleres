import { CreacionAporteComponent } from './../creacion-aporte/creacion-aporte';
import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
// import module firebase database
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

  constructor(public navCtrl: NavController,public navParams: NavParams,
    private database:AngularFireDatabase
  ) {

     this.facultad=navParams.get("facultad");
     this.objetRef$=this.database.list('Materias/'+this.facultad);
     this.initializeItems();
  }
  searchQuery: string = '';
  items: any;
  arr;

  // llegar de la base de datos
  initializeItems() {
    this.items = this.objetRef$;
    this.arr= this.items.toString().replace("},{", " ,").split(" ");
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    console.log(this.arr);

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
    this.navCtrl.push(CreacionAporteComponent);
  }
}
