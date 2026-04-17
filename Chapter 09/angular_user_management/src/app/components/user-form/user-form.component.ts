import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  userId: number | null = null;
  saving = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.userId = Number(idParam);
      this.loadUser(this.userId);
    }
  }

  get f() {
    return this.form.controls;
  }

  loadUser(id: number): void {
    this.userService.getUser(id).subscribe(user => {
      if (!user) return;
      this.form.patchValue({
        name: user.name,
        email: user.email,
        role: user.role || ''
      });
    });
  }

  onSubmit(): void {
    this.saving = true;
    this.error = '';

    if (this.form.invalid) {
      this.saving = false;
      return;
    }

    const payload: Partial<User> = this.form.value;

    if (this.isEdit && this.userId !== null) {
      this.userService.updateUser(this.userId, payload).subscribe({
        next: () => this.router.navigate(['/users']),
        error: () => {
          this.error = 'Failed to update user';
          this.saving = false;
        }
      });
    } else {
      this.userService.createUser(payload).subscribe({
        next: () => this.router.navigate(['/users']),
        error: () => {
          this.error = 'Failed to create user';
          this.saving = false;
        }
      });
    }
  }
}
