import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataServiceService } from '../../shared/services/data-service.service';
import { SettingService } from '../../shared/services/setting.service';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  userTypeSelect: FormGroup;
  selctedUSerType: any;
  user:any;
  ssoURL: string = environment.SSO_URL;
  logOutUrl: string = environment.logOutUrl;

  constructor( public settings: SettingService, public dataService: DataServiceService,private cookieService: CookieService ) { 
    this.dataService.isValidUser.subscribe(value => {
      if (value) {
       this.user = this.dataService.user;
      }
    });

  }

  ngOnInit() {
  }
  
  onUserChange(userVal: any) {
    if (userVal == "0") {
      this.selctedUSerType = 'User';
      alert(this.selctedUSerType);
    }
    else if (userVal == "1") {
      this.selctedUSerType = 'Admin'
      alert(this.selctedUSerType);
    }
    return this.selctedUSerType;
  }

  onLogout() {
    window.location.assign(`${this.logOutUrl}?source=${window.location.origin}`);
    
    this.cookieService.deleteAll(); 
    localStorage.clear();
    sessionStorage.clear();

  
  }
}
