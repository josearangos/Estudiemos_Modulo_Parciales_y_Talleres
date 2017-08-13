import { NgModule } from '@angular/core';
import { DependenciaComponent } from './dependencia/dependencia';
import { ZonaAporteComponent } from './zona-aporte/zona-aporte';
import { CreacionAporteComponent } from './creacion-aporte/creacion-aporte';




@NgModule({
	declarations: [DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent],
	imports: [],
	exports: [DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent]

})
export class ComponentsModule {}
