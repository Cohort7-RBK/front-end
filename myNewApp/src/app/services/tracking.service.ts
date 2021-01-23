import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  constructor(private http: HttpClient) {}
  getAllGrades() {
    return this.http.get('http://localhost:3030/api/grade');
  }

  getGradeByStudent(student: string) {
    return this.http.get(`http://localhost:3030/api/grade/${student}`);
  }
}
