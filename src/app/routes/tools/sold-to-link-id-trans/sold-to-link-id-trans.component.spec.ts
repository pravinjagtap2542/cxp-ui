import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldToLinkIdTransComponent } from './sold-to-link-id-trans.component';

describe('SoldToLinkIdTransComponent', () => {
  let component: SoldToLinkIdTransComponent;
  let fixture: ComponentFixture<SoldToLinkIdTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldToLinkIdTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldToLinkIdTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
