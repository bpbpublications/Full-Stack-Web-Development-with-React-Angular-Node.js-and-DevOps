import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.tasks = this.taskService.list();
  }

  addTask(): void {
    const title = this.newTitle.trim();
    if (!title) return;
    this.taskService.add(title);
    this.newTitle = '';
    this.load();
  }

  toggleTask(task: Task): void {
    this.taskService.toggle(task.id);
    this.load();
  }

  removeTask(task: Task): void {
    this.taskService.remove(task.id);
    this.load();
  }
}
