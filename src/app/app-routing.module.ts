import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'details', component: DetailsComponent},
  {path: '', component: ListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      routes
      //{ enableTracing: true }
    )
  ]
})
export class AppRoutingModule { }
