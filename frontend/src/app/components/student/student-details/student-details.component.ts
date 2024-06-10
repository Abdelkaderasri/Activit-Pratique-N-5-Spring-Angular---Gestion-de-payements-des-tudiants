import { Component } from '@angular/core';
import { Student } from '../../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
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

  back() {
    this.router.navigateByUrl('student');
  }

  getStudent(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.studentService.getStudent(id).subscribe({
        next: (student) => (this.student = student),
        error: (err) => console.error(err),
      });
    });
  }
}
