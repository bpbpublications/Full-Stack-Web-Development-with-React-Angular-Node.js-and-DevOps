import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  courseName = 'Angular Fundamentals';
  selectedStudent = '';

  handleStudentSelected(name: string): void {
    this.selectedStudent = name;
  }
}
