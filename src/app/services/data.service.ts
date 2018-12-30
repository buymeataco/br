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
  //jsonUrl: string = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  jsonUrl: string = 'http://portfolio.buymeataco.com/restaurants.json';

  constructor(private _http: HttpClient) { }

	getDataStream(): Observable<FetchedBusinesses[]> {
		return this._http.get<FetchedBusinesses[]>(this.jsonUrl);
	}

}


