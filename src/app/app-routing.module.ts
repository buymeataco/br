import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
	{path: 'list', component: ListComponent},
	{path: 'detail', component: DetailComponent}
];

@NgModule({
	exports: [RouterModule],
  imports: [
    CommonModule,
		RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
