import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadeleinePage } from './madeleine';

@NgModule({
  declarations: [
    MadeleinePage,
  ],
  imports: [
    IonicPageModule.forChild(MadeleinePage),
  ],
})
export class MadeleinePageModule {}
