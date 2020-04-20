import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [RegisterNewUserComponent, ApprovalRequestComponent]
})
export class UserManagementModule { }


