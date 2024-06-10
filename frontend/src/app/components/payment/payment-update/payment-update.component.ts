import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { StudentService } from '../../../services/student.service';
import { Payment } from '../../../models/payment.model';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.css'],
})
export class PaymentUpdateComponent implements OnInit {
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: 'CASH', // Default value
    status: 'CREATED', // Default value
    file: '',
    student: {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      filiere: '',
    },
  };

  students: Student[] = [];

  constructor(
    private paymentService: PaymentService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.paymentService.getPayment(id).subscribe((payment) => {
      this.payment = payment;
      this.payment.date = this.formatDate(payment.date);
    });

    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.getStudents(0, 100, '').subscribe({
      next: (response) => {
        this.students = response.content;
      },
      error: (err) => {
        console.error('Failed to fetch students', err);
      },
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updatePayment(): void {
    this.paymentService
      .updatePayment(this.payment.id, this.payment)
      .subscribe((updatedPayment) => {
        if (updatedPayment) {
          console.log('Payment updated successfully:', updatedPayment);
          this.router.navigate(['/payment']);
        } else {
          console.error('Failed to update payment');
        }
      });
  }

  cancelUpdate(): void {
    this.router.navigate(['/payment']);
  }
}
