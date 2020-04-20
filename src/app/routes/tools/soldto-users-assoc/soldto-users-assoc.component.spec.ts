import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldtoUsersAssocComponent } from './soldto-users-assoc.component';

describe('SoldtoUsersAssocComponent', () => {
  let component: SoldtoUsersAssocComponent;
  let fixture: ComponentFixture<SoldtoUsersAssocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldtoUsersAssocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldtoUsersAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
