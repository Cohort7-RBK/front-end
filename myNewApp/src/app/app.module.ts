import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './teacher/add-course/add-course.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AllCoursesComponent } from './admin/all-courses/all-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    AllCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
