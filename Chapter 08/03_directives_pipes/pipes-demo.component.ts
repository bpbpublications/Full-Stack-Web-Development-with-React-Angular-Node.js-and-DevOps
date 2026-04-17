import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html'
})
export class PipesDemoComponent {
  course = 'introduction to angular framework';
  today = new Date();
  price = 1999.5;
}
