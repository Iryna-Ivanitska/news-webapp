import { Component, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import { Store } from '@ngrx/store';
import { FetchNews } from 'src/app/store/actions/newsActions';
import { Observable } from 'rxjs';

import * as fromNews from './../../store/index'

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  news$: Observable<INews[]>;

  constructor(private newsService: NewsService,
              private store: Store<fromNews.State>) { 
              }
              
  ngOnInit(): void {
    this.newsService.getNews().subscribe( 
      (response) => {
        this.store.dispatch(new FetchNews({news: response}))
      });
      this.news$ = this.store.select<INews[]>(fromNews.selectNewsList)
  }

}
