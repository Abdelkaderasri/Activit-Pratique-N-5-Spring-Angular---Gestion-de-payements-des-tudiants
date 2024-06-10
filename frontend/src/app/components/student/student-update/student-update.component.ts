import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
})
export class StudentUpdateComponent implements OnInit {
  cancelUpdate() {
    this.router.navigateByUrl('student');
  }
  student: Student = {
    id: 0,
    code: null,
    firstName: '',
    lastName: '',
    email: '',
    filiere: '',
    payments: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.studentService.getStudent(id).subscribe({
        next: (student) => (this.student = student),
        error: (err) => console.error(err),
      });
    });
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student.id, this.student).subscribe({
      next: () => {
        console.log('Product updated successfully');
        this.router.navigateByUrl('student');
      },
      error: (err) => {
        console.error('Error updating product:', err);
      },
    });
  }
}
