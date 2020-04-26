import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public title: string;
  public size: string;

  constructor() {
    this.title = 'contact';
    this.size = 'small-slider';
  }

  ngOnInit(): void {}
}
