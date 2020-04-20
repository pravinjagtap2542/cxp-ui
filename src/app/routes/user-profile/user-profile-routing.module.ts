import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import { ManageMySoldTosComponent } from './manage-my-sold-tos/manage-my-sold-tos.component';
import { LinkCustAssocComponent } from './link-cust-assoc/link-cust-assoc.component';
import { ENotificationsComponent } from './e-notifications/e-notifications.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: EditMyProfileComponent
  },
  {
    path: 'editMyProfile',
    component: EditMyProfileComponent
  },
  {
    path: 'manageMySoldTos',
    component: ManageMySoldTosComponent
  },
  {
    path: 'linkCustAssoc',
    component: LinkCustAssocComponent
  },
  {
    path: 'eNotification',
    component: ENotificationsComponent
  },
  {
    path: 'pushNotification',
    component: PushNotificationsComponent
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
export class UserProfileRoutingModule { }
