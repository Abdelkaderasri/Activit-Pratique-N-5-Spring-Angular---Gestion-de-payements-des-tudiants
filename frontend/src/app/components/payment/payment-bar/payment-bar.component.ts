import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Payment } from '../../../models/payment.model';

@Component({
  selector: 'app-payment-bar',
  templateUrl: './payment-bar.component.html',
  styleUrls: ['./payment-bar.component.css'],
})
export class PaymentBarComponent implements OnInit {
  payments: Payment[] = [];
  createdCount: number = 0;
  validatedCount: number = 0;
  rejectedCount: number = 0;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.paymentService.getPayments(0, 100, '').subscribe({
      next: (response) => {
        this.payments = response.content;
        this.countPaymentsByStatus();
      },
      error: (err) => {
        console.error('Failed to fetch payments', err);
      },
    });
  }

  countPaymentsByStatus(): void {
    this.createdCount = this.payments.filter(
      (payment) => payment.status === 'CREATED'
    ).length;
    this.validatedCount = this.payments.filter(
      (payment) => payment.status === 'VALIDATED'
    ).length;
    this.rejectedCount = this.payments.filter(
      (payment) => payment.status === 'REJECTED'
    ).length;
  }
}
