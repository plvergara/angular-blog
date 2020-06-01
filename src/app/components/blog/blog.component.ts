import { Global } from './../../services/global';
import { Article } from './../../models/article';
import { Component, OnInit, Output } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  public articles: Article[];
  public url: string;
  public title: string;
  public size: string;

  constructor(private _articleService: ArticleService) {
    this.title = 'blog';
    this.size = 'small-slider';
    this.url = Global.url;
  }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      (response) => {
        if (response) {
          this.articles = response;
        } else {
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
