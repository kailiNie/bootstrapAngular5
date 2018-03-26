import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySuncessComponent } from './pay-suncess.component';

describe('PaySuncessComponent', () => {
  let component: PaySuncessComponent;
  let fixture: ComponentFixture<PaySuncessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySuncessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySuncessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
