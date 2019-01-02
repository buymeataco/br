import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  //won't work!!!
  //buttonShow = this._router.url === '/details' ? true : false;
  
  buttonShow: any;
    
  constructor (
    private _router: Router,
  ) {}

  ngOnInit() {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        var back = event.urlAfterRedirects;
        this.buttonShow = back === '/details' ? true : false;
      }
    });
  }//ngOnInit

}//NavbarComponent
