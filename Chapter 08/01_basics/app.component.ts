import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Chapter 8 Demo';
  username = 'Rupesh';
  counter = 0;

  increment(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 0;
  }
}
