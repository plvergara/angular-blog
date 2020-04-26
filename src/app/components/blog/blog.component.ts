import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public title: string;
  public size: string;
  constructor() {
    this.title = 'blog';
    this.size = 'small-slider';
  }

  ngOnInit(): void {}
}
