import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySubmitComponent } from './pay-submit.component';

describe('PaySubmitComponent', () => {
  let component: PaySubmitComponent;
  let fixture: ComponentFixture<PaySubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
