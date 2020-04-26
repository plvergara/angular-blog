import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() user: any;
  public warning: string;

  constructor() {
    this.user = {
      name: '',
      lastname: '',
      bio: '',
      gender: '',
    };
    this.warning = '* invalid format';
  }

  ngOnInit(): void {}

  onSubmit() {}
}
