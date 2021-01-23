import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TrackingService } from '../../services/tracking.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/**
 * @title Table with pagination
 */

export interface PeriodicElement {
  position: number;
  firstName: string;

  lastName: string;
  classe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, firstName: 'Ahmed', lastName: 'Rafrafi', classe: 'C7' },
];

@Component({
  selector: 'tracking-student.component',
  styleUrls: ['tracking-student.component.scss'],
  templateUrl: 'tracking-student.component.html',
})
export class TrackingStudentComponent {
  constructor(private gradeService: TrackingService, private router: Router) {}
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'classe'];
  dataSource: any = ELEMENT_DATA;
  grades: any = [];
  list: any = [];
  role: any;
  student: any;
  teacher: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.role = localStorage.getItem('role');

    this.getAllGrades();
  }

  getAllGrades() {
    this.gradeService.getAllGrades().subscribe((res: any) => {
      this.grades = res;

      for (var i = 0; i < this.grades.length; i++) {
        var obj = {
          position: i + 1,
          firstName: this.grades[i].firstname,
          lastName: this.grades[i].lastname,
          classe: this.grades[i].name,
        };
        this.list.push(obj);
      }

      this.dataSource = this.list;
    });
  }
  getProfile(position: any) {
    var student = this.grades[position - 1].student;
    this.router.navigate(['/grade', student]).then(() => {
      window.location.reload();
    });
  }
}
