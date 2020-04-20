import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENotificationsComponent } from './e-notifications.component';

describe('ENotificationsComponent', () => {
  let component: ENotificationsComponent;
  let fixture: ComponentFixture<ENotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
