import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMySoldTosComponent } from './manage-my-sold-tos.component';

describe('ManageMySoldTosComponent', () => {
  let component: ManageMySoldTosComponent;
  let fixture: ComponentFixture<ManageMySoldTosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMySoldTosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMySoldTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
