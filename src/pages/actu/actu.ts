import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';

@Component({
  selector: 'page-actu',
  templateUrl: 'actu.html',
})
export class ActuPage {

  quotes;

    constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider) {
      this.quotesProvider.getQuotes().subscribe(data => {
        console.log(data);
        this.quotes = data;
      });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ActuPage');
    }

    onShowQuoteDetail(quote){
      this.navCtrl.push('QuotesDetailPage', {quote: quote});
    }



}
