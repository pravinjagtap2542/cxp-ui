import { DataServiceService } from '../../shared/services/data-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute, RoutesRecognized, ActivationStart } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { filter } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  public user:any;
  ssoURL: string = environment.SSO_URL;

  constructor(
    public dataService: DataServiceService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {
    
  }

 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {

    var currentUser = await this.dataService.checkAuthenticationAsPromise();
    if (currentUser && route.data.roles) {
      var isAdmin = currentUser['userRoll'].filter(function(element){ return element.roleId === 1});
      var isUser = currentUser['userRoll'].filter(function(element){ return element.roleId === 2});
      var isManager = currentUser['userRoll'].filter(function(element){ return element.roleId === 3});

      var role;
      if(isAdmin.length){
        role = 'Admin';
      }else if(isUser.length){
        role = 'User';
      }else{
        role = 'Manager';
      }

      if (route.data.roles.indexOf(role) === -1) {
        return false;
      }
      
      return true;
    }

    if(!currentUser){
      this.toastrService.error('User don\'t have session please log in.', 'Login Error', {
        timeOut: 3000
      });
    }

    return false;

  }
}