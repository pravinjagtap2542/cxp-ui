import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { Role } from '../app/shared/models/application-roles';


export const routes: Routes = [
  {
    path: 'user-profile',
    loadChildren: () => import('./routes/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./routes/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./routes/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./routes/tools/tools.module').then(m => m.ToolsModule)
  },
  {
    path: '',
    redirectTo: 'user-profile',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
