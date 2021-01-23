import { Component, OnInit } from '@angular/core';
import { AvertismentService } from '../services/avertisment.service';

@Component({
  selector: 'app-avertisment',
  templateUrl: './avertisment.component.html',
  styleUrls: ['./avertisment.component.scss'],
})
export class AvertismentComponent implements OnInit {
  student = {
    yellowAvertisment: 0,
    readAvertisment: 0,
  };
  countYellow(event: any) {
    this.student.yellowAvertisment = this.student.yellowAvertisment + 1;
    this.aservice
      .updateStudent(this.student, '6009866fccc77e5a2434ec00')
      .subscribe((data) => {});
  }

  countRead(event: any) {
    this.student.readAvertisment = this.student.readAvertisment + 1;
    this.aservice
      .updateStudent(this.student, '6009866fccc77e5a2434ec00')
      .subscribe((data) => {});
  }
  countDeletYellow(event: any) {
    if (this.student.yellowAvertisment > 0) {
      this.student.yellowAvertisment = this.student.yellowAvertisment - 1;
      this.aservice
        .updateStudent(this.student, '6009866fccc77e5a2434ec00')
        .subscribe((data) => {});
    } else {
      this.student.yellowAvertisment;
    }
  }
  countDeletRead(event: any) {
    if (this.student.readAvertisment > 0) {
      this.student.readAvertisment = this.student.readAvertisment - 1;
      this.aservice
        .updateStudent(this.student, '6009866fccc77e5a2434ec00')
        .subscribe((data) => {});
    } else {
      this.student.readAvertisment;
    }
  }
  constructor(private aservice: AvertismentService) {}

  ngOnInit(): void {
    this.aservice.getStudent('6009866fccc77e5a2434ec00').subscribe((data) => {
      this.student.readAvertisment = data.readAvertisment;
      this.student.yellowAvertisment = data.yellowAvertisment;
    });
  }
}
