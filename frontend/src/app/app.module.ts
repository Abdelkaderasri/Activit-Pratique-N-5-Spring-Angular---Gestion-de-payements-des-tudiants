import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentTableComponent } from './components/student/student-table/student-table.component';
import { StudentBarComponent } from './components/student/student-bar/student-bar.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentCreatComponent } from './components/student/student-creat/student-creat.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentItemComponent } from './components/student/student-item/student-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { Interceptor } from './components/helpers/interceptor';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentBarComponent } from './components/payment/payment-bar/payment-bar.component';
import { PaymentItemComponent } from './components/payment/payment-item/payment-item.component';
import { PaymentCreatComponent } from './components/payment/payment-creat/payment-creat.component';
import { PaymentUpdateComponent } from './components/payment/payment-update/payment-update.component';
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { PaymentTableComponent } from './components/payment/payment-table/payment-table.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentTableComponent,
    StudentBarComponent,
    StudentListComponent,
    StudentCreatComponent,
    StudentUpdateComponent,
    StudentItemComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    StudentDetailsComponent,
    PaymentComponent,
    PaymentTableComponent,
    PaymentBarComponent,
    PaymentItemComponent,
    PaymentCreatComponent,
    PaymentUpdateComponent,
    PaymentDetailsComponent,
    PaymentListComponent,
    ConfirmComponent,
    ErrorComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
