import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  editUser(user: User): void {
    this.router.navigate(['/users', user.id]);
  }

  createUser(): void {
    this.router.navigate(['/users/new']);
  }

  confirmDelete(user: User): void {
    const ok = window.confirm(`Delete user "${user.name}"?`);
    if (!ok) return;
    this.userService.deleteUser(user.id).subscribe({
      next: () => this.loadUsers(),
      error: () => alert('Failed to delete user')
    });
  }
}
