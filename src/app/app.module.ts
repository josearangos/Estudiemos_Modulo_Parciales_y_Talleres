import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// componentes
import { DependenciaComponent } from '../components/dependencia/dependencia';
import { ZonaAporteComponent } from '../components/zona-aporte/zona-aporte';
import { CreacionAporteComponent } from '../components/creacion-aporte/creacion-aporte';



@NgModule({
  declarations: [
    MyApp,
    DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
