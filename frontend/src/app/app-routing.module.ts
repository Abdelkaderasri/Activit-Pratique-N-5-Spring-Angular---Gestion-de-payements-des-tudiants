import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { StudentCreatComponent } from './components/student/student-creat/student-creat.component';
import { StudentUpdateComponent } from './components/student/student-update/student-update.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentCreatComponent } from './components/payment/payment-creat/payment-creat.component';
import { PaymentUpdateComponent } from './components/payment/payment-update/payment-update.component';
import { PaymentDetailsComponent } from './components/payment/payment-details/payment-details.component';
import { PaymentTableComponent } from './components/payment/payment-table/payment-table.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: StudentListComponent,
        canActivate: [RoleGuard],
        data: { roles: ['user', 'admin'] },
      },
      {
        path: 'ajouter',
        component: StudentCreatComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'modifier/:id',
        component: StudentUpdateComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'details/:id',
        component: StudentDetailsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
    ],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PaymentListComponent,
        canActivate: [RoleGuard],
        data: { roles: ['user', 'admin'] },
      },
      {
        path: 'ajouter',
        component: PaymentCreatComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'modifier/:id',
        component: PaymentUpdateComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
      {
        path: 'details/:id',
        component: PaymentDetailsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
