import { CreacionAporteComponent } from './../creacion-aporte/creacion-aporte';
import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,public navParams: NavParams) {
     this.initializeItems();
     this.facultad=navParams.get("facultad");
  }

   searchQuery: string = '';
  items: string[];


  // llegar de la base de datos
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'PERU',
      'niquia',
       'Amsterdam',
      'Bogota',
      'PERU',
      'niquia',
       'Amsterdam',
      'Bogota',
      'PERU',
      'niquia',
       'Amsterdam',
      'Bogota',
      'PERU',
      'niquia',
       'Amsterdam',
      'Bogota',
      'PERU',
      'niquia',
       'Amsterdam',
      'Bogota',
      'PERU',
      'niquia'
    ];
  }

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
    this.navCtrl.push(CreacionAporteComponent);
  }




}
