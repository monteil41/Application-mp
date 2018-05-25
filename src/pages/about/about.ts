import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MadeleinePage} from '../madeleine/madeleine';
import {PorcelainePage} from '../porcelaine/porcelaine';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  MadeleineInfo = MadeleinePage;
  PorcelaineInfo = PorcelainePage;
  constructor(public navCtrl: NavController) {

  }

}
