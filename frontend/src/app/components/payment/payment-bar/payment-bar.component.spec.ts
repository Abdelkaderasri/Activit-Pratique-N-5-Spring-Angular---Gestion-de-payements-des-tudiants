import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBarComponent } from './payment-bar.component';

describe('PaymentBarComponent', () => {
  let component: PaymentBarComponent;
  let fixture: ComponentFixture<PaymentBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBarComponent]
    });
    fixture = TestBed.createComponent(PaymentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
