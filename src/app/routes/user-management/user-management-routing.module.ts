import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterNewUserComponent
  },
  {
    path: 'newUserRegistration',
    component: RegisterNewUserComponent
  },
  {
    path: 'requestApproval',
    component: ApprovalRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }


