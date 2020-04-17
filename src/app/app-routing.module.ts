import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { Role } from '../app/shared/models/application-roles';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full',
  },

  // {
  //   path: 'quotes',
  //   component: QuotesComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: [Role.Admin, Role.User, Role.Manager] }
  // },

   {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
