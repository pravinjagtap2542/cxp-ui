import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SoldtoUsersAssocComponent } from './soldto-users-assoc/soldto-users-assoc.component';
import { SoldtoLinkidAssocComponent } from './soldto-linkid-assoc/soldto-linkid-assoc.component';
import { SoldToAssocComponent } from './sold-to-assoc/sold-to-assoc.component';
import { SoldToUsersTransComponent } from './sold-to-users-trans/sold-to-users-trans.component';
import { SoldToLinkIdTransComponent } from './sold-to-link-id-trans/sold-to-link-id-trans.component';

const routes: Routes = [
  {
    path: '',
    component: SoldtoUsersAssocComponent
  },
  {
    path: 'soldtoUsersAssoc',
    component: SoldtoUsersAssocComponent
  },
  {
    path: 'soldtoLinkIdAssoc',
    component: SoldtoLinkidAssocComponent
  },
  {
    path: 'soldToAssoc',
    component: SoldToAssocComponent
  },
  {
    path: 'soldToUsersTrans',
    component: SoldToUsersTransComponent
  },
  {
    path: 'soldToLinkIdTrans',
    component: SoldToLinkIdTransComponent
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
export class ToolsRoutingModule { }
