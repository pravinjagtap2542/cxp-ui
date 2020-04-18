import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SettingService } from 'src/app/shared/services/setting.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  objLoaderStatus: boolean;
  isDevMode: boolean = false;
  constructor(private loaderService: LoaderService, public settings: SettingService) { }

  ngOnInit() {
    this.objLoaderStatus = false;    
    if(this.settings.getAssetsUrl().toLowerCase().includes('readynow')){
      this.isDevMode = false;
    }else{
      this.isDevMode = true;
    }
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
      this.objLoaderStatus = val;
    });
  }

}
