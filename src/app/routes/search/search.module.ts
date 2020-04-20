import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';

import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchCompanyComponent } from './search-company/search-company.component';



@NgModule({
  declarations: [SearchUsersComponent, SearchCompanyComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
