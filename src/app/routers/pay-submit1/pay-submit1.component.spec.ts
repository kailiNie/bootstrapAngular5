import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySubmit1Component } from './pay-submit1.component';

describe('PaySubmit1Component', () => {
  let component: PaySubmit1Component;
  let fixture: ComponentFixture<PaySubmit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySubmit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySubmit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
