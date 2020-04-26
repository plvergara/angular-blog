import { Component, OnInit, Output } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title: string;
  public size: string;

  constructor() {
    this.title = 'Welcome to Angular Course';
    this.size = 'big-slider';
  }

  ngOnInit(): void {}
}
