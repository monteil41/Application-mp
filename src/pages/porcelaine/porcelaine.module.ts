import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorcelainePage } from './porcelaine';

@NgModule({
  declarations: [
    PorcelainePage,
  ],
  imports: [
    IonicPageModule.forChild(PorcelainePage),
  ],
})
export class PorcelainePageModule {}
