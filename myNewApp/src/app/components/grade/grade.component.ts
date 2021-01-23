import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../services/tracking.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  connectuser: any = JSON.parse(localStorage.getItem('student') || '{}');
  grades: any = [];
  average: any;
  admin:any
   student:any
   teacher:any

  constructor(
    private gradeService: TrackingService,
    private router: Router,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.admin=localStorage.getItem('admin')
    this.student=localStorage.getItem('student')
    this.teacher=localStorage.getItem('teacher')

    if (
      this.activateroute.snapshot.params.student &&
      this.activateroute.snapshot.params.student !== this.connectuser._id
    ) {
      this.gradeService
        .getGradeByStudent(this.activateroute.snapshot.params.student)

        .subscribe((data: any) => {
          this.grades = data;
          var sum = 0;
          for (var i = 0; i < this.grades.length; i++) {
            sum += Number(this.grades[i]['note']);
          }
          this.average = sum / this.grades.length;
        });
    } else {
      this.gradeService
        .getGradeByStudent(this.connectuser._id)
        .subscribe((data: any) => {
          this.grades = data;
        });
    }
  }
}
