import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackingStudentComponent } from './components/tracking-student/tracking-student.component';
import { GradeComponent } from './components/grade/grade.component';

import { AdminViewComponent } from './admin-view/admin-view.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { ScheduleComponent1 } from './components/schedule/schedule.component';
import { AllschedulesComponent } from './components/allschedules/allschedules.component';
import { LoginComponent } from './login/login.component';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { AllCoursesComponent } from './admin/all-courses/all-courses.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
const Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar-admin', component: NavbarAdminComponent },
  { path: 'navbar-student', component: NavbarStudentComponent },
  { path: 'navbar-teacher', component: NavbarTeacherComponent },
  { path: 'tracking', component: TrackingStudentComponent },
  { path: 'grade/:student', component: GradeComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '', component: LoginComponent },
  {
    path: 'student/profile',
    component: StudentProfileComponent,
  },
  {
    path: 'schedule/:query',
    component: ScheduleComponent1,
  },
  {
    path: 'allschedules',
    component: AllschedulesComponent,
  },
  { path: 'allCourses', component: AllCoursesComponent },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'listgrades',
    component: ListOfStudentComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
  },
  {
    path: 'student',
    component: NavbarStudentComponent,
  },

  {
    path: 'teacher',
    component: TeacherViewComponent,
  },
  {
    path: 'teacher/profile',
    component: TeacherProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
