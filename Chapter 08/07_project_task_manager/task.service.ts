import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Prepare syllabus', completed: false },
    { id: 2, title: 'Review assignments', completed: true }
  ];
  private nextId = 3;

  list(): Task[] {
    return this.tasks;
  }

  add(title: string): void {
    this.tasks.push({ id: this.nextId++, title, completed: false });
  }

  toggle(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
