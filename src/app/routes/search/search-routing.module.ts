import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchCompanyComponent } from './search-company/search-company.component';


const routes: Routes = [
  {
    path: '',
    component: SearchUsersComponent
  },
  {
    path: 'searchUsers',
    component: SearchUsersComponent
  },
  {
    path: 'searchCompany',
    component: SearchCompanyComponent
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchRoutingModule { }
