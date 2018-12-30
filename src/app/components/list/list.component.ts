import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';
import { FetchedBusinesses } from '../../models/FetchedBusinesses';
import { SanitizedURLarray } from '../../models/SanitizedURLarray';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  fetchedBusinesses: FetchedBusinesses[];
  convertedFetched: any;
  sanitizedURLarray: SanitizedURLarray[];
  featuredBusiness: any;
  fetchedLength: number;
  userClickedBiz: string;
  userRequestedInfo: any;
  zoom: number = 14;
  lng: any;
  lat: any;

  constructor(private _dataService: DataService, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._dataService.getDataStream().subscribe(fetchedBusinesses => {
      this.fetchedBusinesses = fetchedBusinesses['restaurants'];
      this.convertedFetched = this.jsonFeedToArray(this.fetchedBusinesses);
      this.fetchedLength = this.convertedFetched.length;
      this.sanitizedURLarray = this.getImageURLs(this.convertedFetched);
      this.reinsertSanitizedURLs(this.sanitizedURLarray);
      this.featuredBusiness = this.featuredBiz();
      //this.loadDefaultMap();
      this.loadMap();
    });
  }//ngOnInit

  loadMap() {
    this.lng = this.featuredBusiness[0].location.lng;
    this.lat = this.featuredBusiness[0].location.lat;
  }

  jsonFeedToArray(fetched) {
    let url: any = [];
    url.push(fetched);
    let flatURL = [].concat.apply([], url);
    return flatURL;
  }

  featuredBiz() {
    if (this.userClickedBiz) {
      var featuredBiz: any = [];
      for (var i = 0; i < this.fetchedLength; i++) {
        var bizName: string = this.convertedFetched[i].name;
        if (bizName === this.userClickedBiz) {
          this.userRequestedInfo = this.convertedFetched[i];
          featuredBiz.push(this.userRequestedInfo);
        }//if
      }//for
      var flatFeaturedBiz = [].concat.apply([], featuredBiz);
      this.featuredBusiness = flatFeaturedBiz;
    } else {
      let url: any = [];
      for (var i = 0; i < 1; i++) {
        url.push(this.convertedFetched[i]);
      }
      return url;
    }//else
  }//featuredBiz

  getImageURLs(convertedFetched) {
    let url: any = [];
    for (var i = 0; i < this.fetchedLength; i++) {
      url.push(this._sanitizer.bypassSecurityTrustStyle(`url(${convertedFetched[i].backgroundImageURL})`));
    }
    return url;
  }

  reinsertSanitizedURLs(sanitizedURLarray) {
    let url: any = [];
    for (var i = 0; i < this.fetchedLength; i++) {
      var obj = sanitizedURLarray[i];
      var values: any = Object.values(obj);
      url.push(values);
    }
    this.convertedFetched.map((obj, index) => {obj.preppedImageURL = url[index];});
    let flatURL = [].concat.apply([], url);
    return flatURL;
  }//reinsertSanitizedURLs

  clickedBiz(e) {
    this.userClickedBiz = e.explicitOriginalTarget.firstChild.firstChild.innerText;
    this.featuredBiz();
    this.loadMap();
  }
}//ListComponent
