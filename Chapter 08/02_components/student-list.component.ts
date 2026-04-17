import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() course = '';
  @Output() studentSelected = new EventEmitter<string>();

  students = ['Amit', 'Bhavna', 'Chetan', 'Deepa'];

  selectStudent(name: string): void {
    this.studentSelected.emit(name);
  }
}
