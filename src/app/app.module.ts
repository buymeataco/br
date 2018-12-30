import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRs2J2kqhFyLR1mWMcbh_KjeVvM2KmqMM'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
