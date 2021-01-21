import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './task-view/todo';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();
  private tasksUrl = 'http://localhost:3030/api/';
  constructor(private http: HttpClient) {}
  getTasks() {
    this.http
      .get<{ message: string; tasks: any }>(`${this.tasksUrl}task`)
      .pipe(
        map((taskData) => {
          return taskData.tasks.map(
            (task: { title: any; isDone: any; _id: any }) => {
              return {
                title: task.title,
                isDone: task.isDone,
                id: task._id,
              };
            }
          );
        })
      )
      .subscribe((returnedtasks) => {
        this.tasks = returnedtasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(title: string, isDone: boolean) {
    const task: Task = { id: '', title: title, isDone: isDone };
    console.log(task);
    this.http
      .post<{ message: string; taskId: string }>(`${this.tasksUrl}task`, task)
      .subscribe((responseData) => {
        const id = responseData.taskId;
        task.id = id;
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  deletePost(taskId: string) {
    this.http.delete(`${this.tasksUrl}task/` + taskId).subscribe(() => {
      const updatedTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = updatedTasks;
      this.tasksUpdated.next([...this.tasks]);
    });
  }

  deleteAll() {
    const emptyList: Task[] = [];
    this.http.delete(`${this.tasksUrl}task/`).subscribe(() => {
      this.tasks = emptyList;
      this.tasksUpdated.next([...this.tasks]);
    });
  }

  updatePost(id: string, title: string, isDone: boolean) {
    const task: Task = { id: id, title: title, isDone: !isDone };
    this.http.put(`${this.tasksUrl}task/` + id, task).subscribe((response) => {
      const updatedTasks = [...this.tasks];
      const oldTask = updatedTasks.findIndex((p) => p.id === task.id);
      updatedTasks[oldTask] = task;
      this.tasks = updatedTasks;
      this.tasksUpdated.next([...this.tasks]);
    });
  }
}
