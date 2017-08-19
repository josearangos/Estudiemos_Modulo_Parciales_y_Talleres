import { NgModule } from '@angular/core';
import { DependenciaComponent } from './dependencia/dependencia';
import { ZonaAporteComponent } from './zona-aporte/zona-aporte';
import { CreacionAporteComponent } from './creacion-aporte/creacion-aporte';
import { AporteComponent } from './aporte/aporte';




@NgModule({
	declarations: [DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    AporteComponent],
	imports: [],
	exports: [DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    AporteComponent]

})
export class ComponentsModule {}
