import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  error = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.loading = true;
    this.error = '';
    this.dataService.getPosts().subscribe({
      next: posts => {
        this.posts = posts.slice(0, 5);
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load posts.';
        this.loading = false;
      }
    });
  }
}
