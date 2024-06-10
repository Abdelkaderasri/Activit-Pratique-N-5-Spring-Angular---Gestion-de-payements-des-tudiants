import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Payment } from '../../../models/payment.model';
import { ApiResponse2 } from '../../../models/apiResponse.model';
import { Pageable } from '../../../models/pageable.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../confirm/confirm.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css'],
})
export class PaymentTableComponent implements OnInit {
  payments: Payment[] = [];
  pageable: Pageable | undefined;
  totalElements: number = 0;
  keyword: string = '';
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 5;
  currentUser: any;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchPayments(this.currentPage, this.pageSize, this.keyword);
    this.currentUser = this.authService.getCurrentUser();
  }

  fetchPayments(page: number, size: number, keyword: string): void {
    this.paymentService.getPayments(page, size, keyword).subscribe({
      next: (response: ApiResponse2) => {
        this.payments = response.content;
        this.pageable = response.pageable;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      },
    });
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchPayments(this.currentPage, this.pageSize, this.keyword);
  }

  editPayment(payment: Payment): void {
    this.router.navigateByUrl('payment/modifier/' + payment.id);
  }

  addPayment(): void {
    this.router.navigateByUrl('payment/ajouter');
  }

  detailPayment(id: number) {
    this.router.navigateByUrl('payment/details/' + id);
  }

  deletePayment(id: number): void {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.paymentService.deletePayment(id).subscribe({
          next: () => {
            this.fetchPayments(this.currentPage, this.pageSize, this.keyword);
          },
        });
      }
    });
  }

  onSearchChange(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    this.keyword = input.value;
    this.currentPage = 0; // Reset to the first page
    this.fetchPayments(this.currentPage, this.pageSize, this.keyword);
  }
}
