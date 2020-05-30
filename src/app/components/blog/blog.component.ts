import { Component, OnInit, Output } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  public title: string;
  public size: string;
  private _articleService: ArticleService;
  constructor() {
    this.title = 'blog';
    this.size = 'small-slider';
  }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
