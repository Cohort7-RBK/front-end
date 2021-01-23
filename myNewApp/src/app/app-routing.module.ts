import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './admin/all-courses/all-courses.component';

const routes: Routes = [
  {path:'allCourses',component: AllCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
