import { Component, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromNews from './../../store/index'

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  news$: Observable<INews[]>;

  constructor(private store: Store<fromNews.State>) {}
              
  ngOnInit(): void {
      this.news$ = this.store.select<INews[]>(fromNews.selectNewsList)
  }

}
