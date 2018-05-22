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

    this.addMarker_OT(this.map);
    // utilisateur

    this.addMarker_user(this.map);

    // madeleine
    this.addMarker_bijou(this.map);
    this.addMarker_bouledor(this.map);
    this.addMarker_tigoulet(this.map);
    this.addMarker_cerise(this.map);
    this.addMarker_croquembouche(this.map);
    this.addMarker_fournilaredien(this.map);
    this.addMarker_fournilclaire(this.map);
    this.addMarker_renard(this.map);
    this.addMarker_antan(this.map);
    this.addMarker_vanilleetchocolat(this.map);

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
addMarker_user(map:any){

    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: map.getCenter(),
    icon: "assets/imgs/you.png",
    });
  }

//-----------------------OFFICE DE TOURISME---------------------------------//
  addMarker_OT(map:any){
    var myLatLng = {lat: 45.513335, lng: 1.20329};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/office6.png"
    });
  }

//-----------------------PORCELAINE---------------------------------//
  addMarker_brindherbe(map:any){
    var myLatLng = {lat: 45.519633, lng: 1.203393};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_caffy(map:any){

    var myLatLng = {lat: 45.429, lng: 1.302};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_marcognac(map:any){

    var myLatLng = {lat: 45.519261, lng: 1.251772};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_laseynie(map:any){

    var myLatLng = {lat: 45.508028, lng: 1.217566};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_salomon(map:any){

    var myLatLng = {lat: 45.502287, lng: 1.206459};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_couchou(map:any){
    var contentString = "<h1 class='titre'> Galerie du couchou </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    var myLatLng = {lat: 45.514181, lng: 1.201096};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  }

  addMarker_patrimoine(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    var myLatLng = {lat: 45.515729, lng: 1.202694};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });



  }

  addMarker_samie(map:any){

    var myLatLng = {lat: 45.514381, lng: 1.202118};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_samie2(map:any){

    var myLatLng = {lat: 45.559212, lng: 1.209384};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }

  addMarker_palloux(map:any){

    var myLatLng = {lat: 45.531414, lng: 1.204521};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/porcelaine.png"
    });
  }
  //-----------------------MADELEINE---------------------------------//

  addMarker_bijou(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.48511209999999, lng: 1.1912786000000324};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_bouledor(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.535794, lng: 1.208836};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_tigoulet(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.524803, lng: 1.211017};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_cerise(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.514355, lng: 1.203028};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_croquembouche(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.51407, lng: 1.201118};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_fournilaredien(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.515801, lng: 1.205408};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_fournilclaire(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.50936, lng: 1.206834};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_renard(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.510703, lng: 1.201543};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_antan(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.513408, lng: 1.203568};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }

  addMarker_vanilleetchocolat(map:any){
    var contentString = "<h1 class='titre'> Galerie du curlucucu </h1> <p> galerie de porcelaine </p>"
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    var myLatLng = {lat: 45.511259, lng: 1.201471};
    let marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    icon: "assets/imgs/madeleine.png"
    });
  }
}
