import { Global } from './../../services/global';
import { Article } from './../../models/article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Article[];
  public url: string;
  public url_article: string;
  constructor() {
    this.url = Global.url;
  }

  // formatUrl(url) {
  //   return url.replace(/ /g, '_').replace('.', '').toLowerCase();
  // }

  ngOnInit(): void {}
}
