import { ArticleService } from './../../services/article.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public title: string;
  public size: string;
  public article: Article;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.size = 'big-slider';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        (response) => {
          if (response) {
            this.article = response;
          } else {
            this._router.navigate(['/home']);
          }
        },
        (error) => {
          console.info(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }
}
