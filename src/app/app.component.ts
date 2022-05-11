import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsService } from './services/news.service';
import { FetchNews } from './store/actions/newsActions';

import * as fromNews from './store/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private newsService: NewsService,
    private store: Store<fromNews.State>) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe( 
      (response) => {
        this.store.dispatch(new FetchNews({news: response}))
      });
  }
}
