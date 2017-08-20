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
  fotos$:FirebaseListObservable<any>;

  public materia;
  public facultad;
  public aportes:any[]=[];
  public temas:any[]=[];
  public ruta:any;
  public rutaFoto:any;
  public t;
  public d;

   //* firebaseDatabase agregar constructor
  constructor(public navCtrl: NavController,public navParams: NavParams, private database:AngularFireDatabase) {
    this.materia=navParams.get("materia");
    this.facultad=navParams.get("dependencia");
    this.ruta="Aportes/Dependencia/"+this.facultad+"/Materias/"+this.materia;
    this.rutaFoto=this.ruta;
    this.aportes$=this.database.list(this.ruta);
    this.fotos$=this.database.list(this.rutaFoto);
    this.getAportes();

  }


getAportes(){

   this.aportes=[];
   this.temas=[];
   this.aportes$.forEach(element => {
    element.forEach(a=>{

        let aport:any={
        tema:a.tema,
        descripcion:a.Descripcion,
        foto:a.fotos
        // aqui irian va las imagenes
      }

      console.log(aport);
      this.aportes.push(aport);
      this.temas.push(a.tema);
    });
 });
 this.aportes.pop();// se saca el ultimo ya que es undefied
 this.temas.pop();
}

getItems(ev: any) {
    this.getAportes();
    // set val to the value of the searchbar
    let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.temas = this.temas.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }

}


}
