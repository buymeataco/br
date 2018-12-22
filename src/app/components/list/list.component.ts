import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';
import { FetchedBusinesses } from '../../models/FetchedBusinesses';
import { SanitizedURLarray } from '../../models/SanitizedURLarray';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  fetchedBusinesses: FetchedBusinesses[];
  sanitizedURLarray: SanitizedURLarray[];

  constructor(private _dataService: DataService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchedBusinesses = this._dataService.getBusinesses();
    this.sanitizedURLarray = this.getImageURLs();
    this.reinsertSanitizedURLs(this.sanitizedURLarray);
  }//ngOnInit

  getImageURLs() {
    let url: any = [];
    for (var i = 0; i < this.fetchedBusinesses.length; i++) {
      url.push(this._sanitizer.bypassSecurityTrustStyle(`url(${this.fetchedBusinesses[i].backgroundImageURL})`));
    }
    return url;
  }

  reinsertSanitizedURLs(sanitizedURLarray) {
    let url: any = [];
    for (var i = 0; i < sanitizedURLarray.length; i++) {
      var obj = sanitizedURLarray[i];
      var values: any = Object.values(obj);
      url.push(values);
    }
    this.fetchedBusinesses.map((obj, index) => {
      obj.preppedImageURL = url[index];
    });
  }//reinsertSanitizedURLs

}//ListComponent
