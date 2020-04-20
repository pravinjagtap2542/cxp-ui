import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';

import { SoldtoUsersAssocComponent } from './soldto-users-assoc/soldto-users-assoc.component';
import { SoldtoLinkidAssocComponent } from './soldto-linkid-assoc/soldto-linkid-assoc.component';
import { SoldToAssocComponent } from './sold-to-assoc/sold-to-assoc.component';
import { SoldToUsersTransComponent } from './sold-to-users-trans/sold-to-users-trans.component';
import { SoldToLinkIdTransComponent } from './sold-to-link-id-trans/sold-to-link-id-trans.component';



@NgModule({
  declarations: [SoldtoUsersAssocComponent, SoldtoLinkidAssocComponent, SoldToAssocComponent, SoldToUsersTransComponent, SoldToLinkIdTransComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
