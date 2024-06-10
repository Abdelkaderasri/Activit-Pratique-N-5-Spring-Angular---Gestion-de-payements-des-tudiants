import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { StudentService } from '../../services/student.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  paymentCount: number = 0;
  studentCount: number = 0;

  constructor(
    private paymentService: PaymentService,
    private studentService: StudentService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchPaymentCount();
    this.fetchStudentCount();
  }

  fetchPaymentCount(): void {
    this.paymentService.getPayments(0, 100, '').subscribe((response) => {
      this.paymentCount = response.totalElements;
    });
  }

  fetchStudentCount(): void {
    this.studentService.getStudents(0, 100, '').subscribe((response) => {
      this.studentCount = response.totalElements;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
