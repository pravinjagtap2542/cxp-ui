import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleTimeoutPopupComponent } from './idle-timeout-popup.component';

describe('IdleTimeoutPopupComponent', () => {
  let component: IdleTimeoutPopupComponent;
  let fixture: ComponentFixture<IdleTimeoutPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleTimeoutPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleTimeoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
