import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskViewComponent } from './pages/task-view/task-view.component';



import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'navbar-admin', component:NavbarAdminComponent},
  { path:'navbar-student', component:NavbarStudentComponent},
  { path:'navbar-teacher', component:NavbarTeacherComponent},
  { path: 'task', component: TaskViewComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [TaskViewComponent];

