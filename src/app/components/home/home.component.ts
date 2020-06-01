import { Global } from './../../services/global';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit, Output } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService],
})
export class HomeComponent implements OnInit {
  public articles: Article[];
  public url: string;
  public title: string;
  public size: string;

  constructor(private _articleService: ArticleService) {
    this.title = 'Welcome to Angular Course';
    this.size = 'big-slider';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
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
