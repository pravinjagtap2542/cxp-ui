import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../shared/services/setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  constructor(public settings: SettingService,) { }
  ngOnInit() {
  }

}
