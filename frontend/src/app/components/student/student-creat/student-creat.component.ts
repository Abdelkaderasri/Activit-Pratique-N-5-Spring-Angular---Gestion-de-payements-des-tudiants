import { Component } from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-creat',
  templateUrl: './student-creat.component.html',
  styleUrls: ['./student-creat.component.css'],
})
export class StudentCreatComponent {
  newStudent: Student = {
    id: 0,
    code: '',
    firstName: '',
    lastName: '',
    email: '',
    filiere: '',
    payments: [],
  };

  constructor(private studentService: StudentService, private router: Router) {}

  createStudent(): void {
    this.studentService.createStudent(this.newStudent).subscribe(
      (response) => {
        console.log('New student added:', response);
        this.router.navigateByUrl('student');
      },
      (error) => {
        console.error('Error adding new student:', error);
      }
    );
  }
}
