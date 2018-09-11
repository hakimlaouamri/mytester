import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DermatoPage } from './dermato';

@NgModule({
  declarations: [
    DermatoPage,
  ],
  imports: [
    IonicPageModule.forChild(DermatoPage),
  ],
})
export class DermatoPageModule {}
