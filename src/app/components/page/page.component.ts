import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public title: string;
  public size: string;

  constructor() {
    this.title = 'Test Page';
    this.size = 'small-slider';
  }
  ngOnInit(): void {}
}
