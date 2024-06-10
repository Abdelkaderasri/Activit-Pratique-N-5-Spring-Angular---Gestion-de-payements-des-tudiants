import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { StudentService } from '../../../services/student.service';
import { Payment } from '../../../models/payment.model';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-payment-creat',
  templateUrl: './payment-creat.component.html',
  styleUrls: ['./payment-creat.component.css'],
})
export class PaymentCreatComponent implements OnInit {
  payment: Payment = {
    id: 0,
    code: '',
    date: '',
    type: 'CASH',
    status: 'CREATED',
    file: '',
    student: {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      filiere: '',
    },
  };

  selectedFile: File | null = null;
  students: Student[] = [];

  constructor(
    private paymentService: PaymentService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.payment.file = this.selectedFile.name;
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.payment.date = this.formatDate(this.payment.date);
      this.paymentService.createPayment(this.payment).subscribe(() => {
        this.router.navigate(['/payment']);
      });
    } else {
      console.error('No file selected');
    }
  }

  cancel(): void {
    this.router.navigate(['/payment']);
  }
}
