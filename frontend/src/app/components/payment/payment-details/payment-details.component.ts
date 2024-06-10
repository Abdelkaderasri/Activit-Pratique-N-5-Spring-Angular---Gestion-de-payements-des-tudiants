import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../models/payment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit {
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: '',
    status: '',
    file: '',
    student: null,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.getPayments();
  }

  back() {
    console.log(this.payment);
    this.router.navigateByUrl('payment');
  }

  getPayments(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.paymentService.getPayment(id).subscribe({
        next: (payment) => (this.payment = payment),
        error: (err) => console.error(err),
      });
    });
  }
}
