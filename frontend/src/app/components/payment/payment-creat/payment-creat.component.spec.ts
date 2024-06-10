import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCreatComponent } from './payment-creat.component';

describe('PaymentCreatComponent', () => {
  let component: PaymentCreatComponent;
  let fixture: ComponentFixture<PaymentCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCreatComponent]
    });
    fixture = TestBed.createComponent(PaymentCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
