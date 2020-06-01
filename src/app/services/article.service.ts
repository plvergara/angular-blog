import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }
  getArticles(last: any = null): Observable<any> {
    let articles = 'articles';
    if (last !== null) {
      articles = 'articles/true';
    }
    return this._http.get(this.url + articles);
  }
}
