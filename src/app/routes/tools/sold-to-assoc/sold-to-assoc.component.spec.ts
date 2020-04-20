import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldToAssocComponent } from './sold-to-assoc.component';

describe('SoldToAssocComponent', () => {
  let component: SoldToAssocComponent;
  let fixture: ComponentFixture<SoldToAssocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldToAssocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldToAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
