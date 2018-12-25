import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { FetchedBusinesses } from '../models/FetchedBusinesses';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  jsonUrl: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

  constructor(private _http: HttpClient) { }

  getDataStream(): Observable<FetchedBusinesses[]> {
    return this._http.get<FetchedBusinesses[]>(this.jsonUrl);
  }

  // constructor() {
  //   this.businesses = [
  //   {
  //     name: 'Yard House',
  //     backgroundImageURL: 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/yardhouse.png',
  //     category: 'Tap House',
  //     contact: {
  //       phone: 9727164004,
  //       formattedPhone: '(972) 716-4004',
  //       twitter: 'yardhouse',
  //       facebook: 92873089221,
  //       facebookUsername: 'YardHouse',
  //       facebookName: 'Yard House'
  //     },
  //     location: {
  //       address: '5100 Belt Line Rd',
  //       crossStreet: 'Dallas North Tollway',
  //       lat: '32.95061646',
  //       lng: '-96.81974196',
  //       postalCode: 75254,
  //       cc: 'US',
  //       city: 'Dallas',
  //       state: 'TX',
  //       country: 'United States',
  //         formattedAddress: {
  //           streetNum: '5100 Belt Line Rd',
  //           cityStateZip: 'Dallas, TX 75254',
  //           country: 'United States'
  //         }
  //     }//location
  //    },
  //     {
  //       name: 'Pappadeaux',
  //       backgroundImageURL: 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/pappadeaux.png',
  //       category: 'Seafood',
  //       contact: {
  //         phone: 9727164004,
  //         formattedPhone: '(972) 716-4004',
  //         twitter: 'yardhouse',
  //         facebook: 92873089221,
  //         facebookUsername: 'YardHouse',
  //         facebookName: 'Yard House'
  //       },
  //       location: {
  //         address: '5100 Belt Line Rd',
  //         crossStreet: 'Dallas North Tollway',
  //         lat: '32.95061646',
  //         lng: '-96.81974196',
  //         postalCode: 75254,
  //         cc: 'US',
  //         city: 'Dallas',
  //         state: 'TX',
  //         country: 'United States',
  //         formattedAddress: {
  //           streetNum: '5100 Belt Line Rd',
  //           cityStateZip: 'Dallas, TX 75254',
  //           country: 'United States'
  //         }
  //       }//location
  //     }
  //   ];
  // }//constructor

  // getBusinesses() {
  //   return this.businesses;
  // }

} //DataService


