import { Component, OnInit } from '@angular/core';
import {AllCoursesService} from '../all-courses.service'
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses: any;

  constructor( private AllCoursesService: AllCoursesService )
     { }

     ngOnInit() {
      this.AllCoursesService.getService().subscribe((res) => {
        this.courses = res;
      });
  }

}
