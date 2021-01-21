import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task } from './todo';
import { TasksService } from '../todo.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  tasks: Task[] = [];
  private tasksSub: Subscription | undefined;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getTasks();
    this.tasksSub = this.tasksService
      .getTaskUpdateListener()
      .subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
  }

  addTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.tasksService.addTask(form.value.title, false);
    console.log(form.value.title);
    form.resetForm();
  }

  deleteTask(taskId: string) {
    this.tasksService.deletePost(taskId);
  }

  deleteAll() {
    this.tasksService.deleteAll();
  }

  updateTask(task: Task) {
    this.tasksService.updatePost(task.id, task.title, task.isDone);
  }
}
