import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCustAssocComponent } from './link-cust-assoc.component';

describe('LinkCustAssocComponent', () => {
  let component: LinkCustAssocComponent;
  let fixture: ComponentFixture<LinkCustAssocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkCustAssocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCustAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
