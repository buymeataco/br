import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
	{path: 'list', component: ListComponent}
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
