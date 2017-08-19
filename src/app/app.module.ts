
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Ionic view
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
// firebase Module
import {AngularFireModule} from 'angularfire2';
// firebase credential of the dashboard
import {FIREBASE_CREDENTIALS } from '../app/firebase.credentials';
// database firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// componentes
import { DependenciaComponent } from '../components/dependencia/dependencia';
import { ZonaAporteComponent } from '../components/zona-aporte/zona-aporte';
import { CreacionAporteComponent } from '../components/creacion-aporte/creacion-aporte';
import { AporteComponent } from '../components/aporte/aporte';
//ImageView Galeria




//Camara
import { Camera } from '@ionic-native/camera';

const CloudSettings: CloudSettings = {
  'core':{
    'app_id': '05f7e2c5'
  }
}

@NgModule({
  declarations: [
    MyApp,
    DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    AporteComponent,

    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // image gallery efect to zoom
    IonicImageViewerModule,
    // initialise angularfirebase with credencials form the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
  // database Firebase
    AngularFireDatabaseModule,
    //ionicview
    CloudModule.forRoot(CloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DependenciaComponent,
    ZonaAporteComponent,
    CreacionAporteComponent,
    AporteComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
