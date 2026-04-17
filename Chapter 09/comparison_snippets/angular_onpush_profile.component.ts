import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<p>{{ user.name }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() user: { name: string } | null = null;
}
