import { Injectable } from '@angular/core';
import { IdleTimeoutPopupComponent } from '../../shared/idle-timeout-popup/idle-timeout-popup.component';
import {BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class IdleTimeoutService {

  constructor(private bsModalService: BsModalService) { }
  confirm(message: string): Promise<boolean> {
    const modal = this.bsModalService.show(IdleTimeoutPopupComponent, { 
      backdrop: 'static',
      keyboard: false,
      ignoreBackdropClick: true,
      initialState: { message: message }
    });
    return new Promise<boolean>((resolve, reject) => modal.content.result.subscribe((result) => resolve(result) ));
  }
}
