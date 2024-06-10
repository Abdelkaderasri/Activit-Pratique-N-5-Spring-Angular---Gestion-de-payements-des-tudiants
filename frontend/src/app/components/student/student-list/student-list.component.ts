import { Component, OnInit } from '@angular/core';
import { Student } from "../../../models/student.model";
import { StudentService } from "../../../services/student.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  {

}
