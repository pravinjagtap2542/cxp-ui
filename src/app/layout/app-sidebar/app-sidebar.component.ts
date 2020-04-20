import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { SettingService } from '../../shared/services/setting.service';

import { DataServiceService } from '../../shared/services/data-service.service';

import { environment } from '../../../environments/environment';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})

export class AppSidebarComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  @Input() showFiller: any = false;
  @Output() showFillerChanged = new EventEmitter<any>();

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public settings: SettingService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ngOnInit() {
   
  }

}
