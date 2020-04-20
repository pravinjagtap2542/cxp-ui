import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldToUsersTransComponent } from './sold-to-users-trans.component';

describe('SoldToUsersTransComponent', () => {
  let component: SoldToUsersTransComponent;
  let fixture: ComponentFixture<SoldToUsersTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldToUsersTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldToUsersTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
