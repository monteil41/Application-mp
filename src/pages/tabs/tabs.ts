import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ActuPage } from '../actu/actu';
import { DecouvrirPage } from '../decouvrir/decouvrir';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab3Root = AboutPage;
  tab4Root = ActuPage;
  tab1Root = DecouvrirPage;

  constructor() {

  }
}
