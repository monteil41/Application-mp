import { Injectable } from '@angular/core';

declare var google;

@Injectable()
export class JsMapsProvider {

  map: any;

  constructor() {

  }




  init(location, element){
    let latLng = new google.maps.LatLng(location.latitude, location.longitude);
    let opts = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(element.nativeElement, opts);

    //------------------------ Ici les marqueurs-------------------------//

    //--- declarations des marqueurs ---//
    this.addMarker_User(this.map);
    this.addMarker_Test(this.map);
    this.addMarker_Test2(this.map);
  }


    //--- Ajout des marqueurs ---//



  addMarker_User(map:any){

    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: map.getCenter(),
    icon: "assets/imgs/officetourisme2.png"
    });
  }

  addMarker_Test(map:any){
    var myLatLng = {lat: 45.512, lng: 1.203};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng
    });
  }

  addMarker_Test2(map:any){

    var myLatLng = {lat: 45.512, lng: 1.202};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/test2.png"
    });
  }
}
