import { Component } from '@angular/core';

/**
 * Generated class for the DependenciaComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dependencia',
  templateUrl: 'dependencia.html'
})
export class DependenciaComponent {

  text: string;

  constructor() {
    console.log('Hello DependenciaComponent Component');
    this.text = 'Hello World';
  }

}
