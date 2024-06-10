import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { ApiResponse } from '../../../models/apiResponse.model';
import { Pageable } from '../../../models/pageable.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../confirm/confirm.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];
  pageable: Pageable | undefined;
  totalElements: number = 0;
  keyword: string = '';
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 5;
  currentUser: any;

  constructor(
    private studentService: StudentService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchStudents(this.currentPage, this.pageSize, this.keyword);
    this.currentUser = this.authService.getCurrentUser();
  }

  fetchStudents(page: number, size: number, keyword: string): void {
    this.studentService.getStudents(page, size, keyword).subscribe({
      next: (response: ApiResponse) => {
        this.students = response.content;
        this.pageable = response.pageable;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      },
    });
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchStudents(this.currentPage, this.pageSize, this.keyword);
  }

  editStudent(student: Student): void {
    this.router.navigateByUrl('student/modifier/' + student.id);
  }

  addStudent() {
    this.router.navigateByUrl('student/ajouter');
  }

  detailStudent(id: number) {
    this.router.navigateByUrl('student/details/' + id);
  }

  deleteStudent(id: number): void {
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.studentService.deleteStudent(id).subscribe({
          next: () => {
            this.fetchStudents(this.currentPage, this.pageSize, this.keyword);
          },
        });
      }
    });
  }

  onSearchChange(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    this.keyword = input.value;
    this.currentPage = 0; // Reset to the first page
    this.fetchStudents(this.currentPage, this.pageSize, this.keyword);
  }
}
