import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ContactsPage} from '../pages/contacts/contacts';
import {DermatoPage} from '../pages/dermato/dermato';
import {TraitementsPage} from '../pages/traitements/traitements';
import {HomeobesitePage} from '../pages/homeobesite/homeobesite';
import { ProfilPage } from '../pages/profil/profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    DermatoPage,
    TraitementsPage,
    HomeobesitePage,
    ProfilPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    DermatoPage,
    TraitementsPage,
    HomeobesitePage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
