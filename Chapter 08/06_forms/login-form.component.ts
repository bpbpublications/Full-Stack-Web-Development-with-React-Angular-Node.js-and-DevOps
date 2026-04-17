import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  model = {
    email: '',
    password: ''
  };

  submitted = false;

  submitForm(): void {
    this.submitted = true;
    console.log('Login form submitted', this.model);
  }
}
