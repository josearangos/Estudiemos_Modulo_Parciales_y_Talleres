import { NgModule } from '@angular/core';
import { DependenciaComponent } from './dependencia/dependencia';
import { ZonaAporteComponent } from './zona-aporte/zona-aporte';




@NgModule({
	declarations: [DependenciaComponent,
    ZonaAporteComponent],
	imports: [],
	exports: [DependenciaComponent,
    ZonaAporteComponent]

})
export class ComponentsModule {}
