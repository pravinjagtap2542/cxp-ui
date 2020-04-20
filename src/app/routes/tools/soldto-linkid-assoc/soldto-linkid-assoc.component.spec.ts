import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldtoLinkidAssocComponent } from './soldto-linkid-assoc.component';

describe('SoldtoLinkidAssocComponent', () => {
  let component: SoldtoLinkidAssocComponent;
  let fixture: ComponentFixture<SoldtoLinkidAssocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldtoLinkidAssocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldtoLinkidAssocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
