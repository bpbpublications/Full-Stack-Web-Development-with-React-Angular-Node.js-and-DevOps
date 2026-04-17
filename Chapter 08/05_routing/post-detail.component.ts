import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  template: `
    <h2>Post Detail</h2>
    <p>Showing post with id: {{ id }}</p>
  `
})
export class PostDetailComponent implements OnInit {
  id = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
