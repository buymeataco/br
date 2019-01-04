import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  featuredBusiness: any;
  zoom: number = 14;
  lng: number;
  lat: number;
  lbl: string;

  constructor() {}

  ngOnInit() {
    this.getFeaturedBusiness();
    this.lng = this.featuredBusiness[0].location.lng;
    this.lat = this.featuredBusiness[0].location.lat;
    this.lbl = this.featuredBusiness[0].name;
  }

  getFeaturedBusiness() {
    if (localStorage.getItem('featuredBusiness') == null) {
      this.featuredBusiness = [];
    } else {
      this.featuredBusiness = JSON.parse(localStorage.getItem('featuredBusiness'));
    }
  }//getFeaturedBusiness

}//DetailsComponent
