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

    // utilisateur
    this.addMarker_User(this.map);
    // madeleine


    // porcelaine
    this.addMarker_caffy(this.map);
    this.addMarker_brindherbe(this.map);
    this.addMarker_marcognac(this.map);
    this.addMarker_laseynie(this.map);
    this.addMarker_salomon(this.map);
    this.addMarker_couchou(this.map);
    this.addMarker_patrimoine(this.map);
    this.addMarker_samie(this.map);
    this.addMarker_samie2(this.map);
    this.addMarker_palloux(this.map);
  }


    //--- Ajout des marqueurs ---//

//-----------------------UTILISATEUR--------------------------------//
addMarker_User(map:any){

  let marker = new google.maps.Marker({
  map: map,
  animation: google.maps.Animation.DROP,
  position: map.getCenter(),
  icon: "assets/imgs/you.png"
  });
}
//-----------------------PORCELAINE---------------------------------//
  addMarker_brindherbe(map:any){
    var myLatLng = {lat: 45.519633, lng: 1.203393};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng
    });
  }

  addMarker_caffy(map:any){

    var myLatLng = {lat: 45.429, lng: 1.302};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_marcognac(map:any){

    var myLatLng = {lat: 45.519261, lng: 1.251772};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_laseynie(map:any){

    var myLatLng = {lat: 45.508028, lng: 1.217566};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_salomon(map:any){

    var myLatLng = {lat: 45.502287, lng: 1.206459};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_couchou(map:any){
    var contentString = "coucou"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    var myLatLng = {lat: 45.514181, lng: 1.201096};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }

  addMarker_patrimoine(map:any){

    var myLatLng = {lat: 45.515729, lng: 1.202694};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_samie(map:any){

    var myLatLng = {lat: 45.514381, lng: 1.202118};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_samie2(map:any){

    var myLatLng = {lat: 45.559212, lng: 1.209384};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }

  addMarker_palloux(map:any){

    var myLatLng = {lat: 45.531414, lng: 1.204521};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    });
  }
  //-----------------------MADELEINE---------------------------------//
}
