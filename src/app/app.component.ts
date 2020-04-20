import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as $ from "jquery";
import { UserIdleService } from 'angular-user-idle';
import { environment } from '../../src/environments/environment';
import { IdleTimeoutService } from '../app/shared/services/idle-timeout.service';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  public showFiller: any = false;
  private _mobileQueryListener: () => void;

  logOutUrl: string = environment.logOutUrl;
  ssoURL: string = environment.SSO_URL;
  cookieValue = 'UNKNOWN';
  accessDenied: boolean;
  public idleState: any;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private modalService: BsModalService, public idleTimeoutService: IdleTimeoutService, private cookieService: CookieService, private userIdle: UserIdleService) {
    let smsession = this.cookieService.get("SMSESSION");
    if (smsession.toUpperCase() == 'NO' || smsession.toUpperCase() == 'LOGGEDOFF') {
      this.accessDenied = true;
      window.location.reload();
    }
    else {
      this.accessDenied = false;
      this.userIdle.startWatching();
    }

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {


    this.userIdle.onTimerStart().subscribe(count => {
      this.idleState = 'You will time out in ' + count + ' seconds!'
      this.idleAction();

    });

    this.userIdle.onTimeout().subscribe(() => {
      for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
        this.modalService.hide(i);
      }

      this.logout();
    });
  }

  showFillerChanged(event){
    this.showFiller = event;
  }
  
  async idleAction() {
    const result = await this.idleTimeoutService.confirm(this.idleState);
    if (result) {
      for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
        this.modalService.hide(i);
      }
      this.logout();
    } else {
      for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
        this.modalService.hide(i);
      }
      window.location.reload();
    }
  }

  logout() {
    window.location.assign(`${this.logOutUrl}?source=${window.location.origin}`);

    this.cookieService.deleteAll();
    localStorage.clear();
    sessionStorage.clear();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
