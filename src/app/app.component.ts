import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactsPage } from '../pages/contacts/contacts';
import { DermatoPage } from '../pages/dermato/dermato';
import { HomeobesitePage } from '../pages/homeobesite/homeobesite';
import { TraitementsPage } from '../pages/traitements/traitements';
import { ProfilPage } from '../pages/profil/profil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',icon:'list-box', component: HomePage },
      { title: 'List',icon:'list-box', component: ListPage },
      { title: 'Profil',icon:'list-box', component: ProfilPage },
      { title: 'Contacts',icon:'list-box', component: ContactsPage },
      { title: 'Dermato',icon:'list-box', component: DermatoPage },
      { title: 'Obésité',icon:'list-box', component: HomeobesitePage },
      { title: 'Traitements',icon:'list-box', component: TraitementsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
