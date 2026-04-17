import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [TaskListComponent]
})
export class TaskAppModule {}
