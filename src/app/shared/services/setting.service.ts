import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public assetsUrl: any;

  constructor() { }

  getAssetsUrl() {
    if (isDevMode()) {
        return this.assetsUrl = '/assets/';
    } else {
        return this.assetsUrl = 'readynow/static/assets/';
    }
}

}
