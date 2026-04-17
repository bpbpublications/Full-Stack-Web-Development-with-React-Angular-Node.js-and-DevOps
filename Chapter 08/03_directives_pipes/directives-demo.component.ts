import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html'
})
export class DirectivesDemoComponent {
  showDetails = true;

  topics = ['Components', 'Templates', 'Services', 'Routing', 'Forms'];

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
