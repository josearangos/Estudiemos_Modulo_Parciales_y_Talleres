import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello CreacionAporteComponent Component');
    this.text = 'Hello World';
  }

}
