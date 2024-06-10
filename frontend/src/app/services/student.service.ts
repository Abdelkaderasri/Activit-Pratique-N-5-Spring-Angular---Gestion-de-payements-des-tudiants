import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  // CREATE
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  // READ
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  getStudents(
    page: number,
    size: number,
    keyword: string
  ): Observable<ApiResponse> {
    const params = {
      page: page.toString(),
      size: size.toString(),
      keyword: keyword.toString(),
    };

    return this.http.get<ApiResponse>(this.baseUrl, { params });
  }

  // UPDATE
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  // DELETE
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/${id}`);
  }
}
