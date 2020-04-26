import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public title: string;
  public size: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.size = 'big-slider';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.info(params);
      this.title = params.title;
    });
  }
}
