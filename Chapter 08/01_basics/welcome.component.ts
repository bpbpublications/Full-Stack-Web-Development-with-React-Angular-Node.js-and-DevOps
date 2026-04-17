import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h2>Basic Angular Concepts</h2>
    <ul>
      <li>Modules group features together.</li>
      <li>Components control a part of the UI.</li>
      <li>Templates define how data appears.</li>
      <li>Data binding connects template and class.</li>
    </ul>
  `
})
export class WelcomeComponent {}
