import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-idle-timeout-popup',
  templateUrl: './idle-timeout-popup.component.html',
  styleUrls: ['./idle-timeout-popup.component.scss']
})
export class IdleTimeoutPopupComponent implements OnInit {

  @Input() message: string;
  result: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  ngOnInit() {
  }

  logout(): void {
    this.result.next(true);
  }

  stay(): void {
    this.result.next(false);
  }

}
