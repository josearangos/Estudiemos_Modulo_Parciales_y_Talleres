//* prueba para subir aporte
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';

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

  public materia;
   //* firebaseDatabase agregar constructor
  constructor(public navCtrl: NavController,public navParams: NavParams, private database:AngularFireDatabase) {
    this.materia=navParams.get("materia");
    this.imagenes=["https://image.ibb.co/jJS5u5/20160919_143904.jpg","https://image.ibb.co/bw8BZ5/20160919_143911.jpg","https://image.ibb.co/kkX5u5/20160919_143914.jpg"];


    //* acceso a la bse de datos
  this.aportes$=this.database.list('Aportes/Dependencia/Agrarias/Materias/Quimica I');


  this.aportes$.push({
    Descripcion:"Sint anim duis fugiat magna consectetur nostrud aliqua tempor esse consequat ad qui ullamco labore. Occaecat sit nisi elit incididunt incididunt cupidatat in Lorem. Id consectetur reprehenderit mollit velit pariatur anim mollit fugiat laboris excepteur.",
    tema:"Elit eiusmod occaecat in magna nisi velit laboris ipsum dolore.",
    dependencia:"Do nulla ullamco esse ut.",
    materia:"Est deserunt do non voluptate mollit occaecat irure nisi dolore aliqua veniam aliqua fugiat non.",
    fotos:{
      foto1:"https://image.ibb.co/jJS5u5/20160919_143904.jpg",
      foto2:"https://image.ibb.co/bw8BZ5/20160919_143911.jpg",
      foto3:"https://image.ibb.co/kkX5u5/20160919_143914.jpg"
    }
  }
  );

  }

getItems(ev: any) {



}


}
