import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { ZonaAporteComponent } from "../zona-aporte/zona-aporte";

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

   constructor(public navCtrl: NavController,public navParams: NavParams

  ) {

  }

zonaDeAportes(depen:string){
  this.navCtrl.push(ZonaAporteComponent,{facultad:depen});
}

  listaDependencias: Array<any> = [
    {
      nombre: "Igeniería",
      imag: "../../assets/img/ing.png"
    },

    {
      nombre: "Ciencias Exactas",
      imag: "../../assets/img/exactas.png"
    },

  {
      nombre: "Economicas",
      imag: "../../assets/img/economicas.png"
    },
     {
      nombre: "Educación",
      imag: "../../assets/img/educacion.png"
    },
    {
      nombre: "Ciencias Agrarias",
      imag: "../../assets/img/agrarias.png"
    },
    {
      nombre: "Artes",
      imag: "../../assets/img/artes.png"
    },
    {
      nombre: "Comunicaciones",
      imag: "../../assets/img/comunicaciones.png"
    },
    {
      nombre: "Ciencias politicas",
      imag: "../../assets/img/derecho.png"
    },
    {
      nombre: "Microbiologia",
      imag: "../../assets/img/micro.png"
    },
    {
      nombre: "Medicina",
      imag: "../../assets/img/medicina.png"
    },
    {
      nombre: "Enfermeria",
      imag: "../../assets/img/enfermeria.png"
    },

   {
      nombre:"Odontología",
      imag:"../../assets/img/odon.png"
    }
  ];
}
