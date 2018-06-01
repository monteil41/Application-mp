import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { JsMapsProvider } from './../js-maps/js-maps';


@Injectable()
export class MapsProvider {

  map: any;

  constructor(public platform: Platform) {
    if(this.platform.is('cordova') &&
      (this.platform.is('ios') || this.platform.is('android'))){
      this.map = new JsMapsProvider();
    } else {
      this.map = new JsMapsProvider();
    }
  }

  init(location, element){
    this.map.init(location, element);
  }

}
