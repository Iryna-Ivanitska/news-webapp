import { Component, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import { Store } from '@ngrx/store';
import { FetchNews, NewsActions } from 'src/app/store/actions/newsActions';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  news: INews[];

  constructor(private newsService: NewsService,
              private store: Store) { 
    // this.news$ = this.store.select('news')
              }

  ngOnInit(): void {

    this.store.subscribe((state) => console.log(state));
    
    this.newsService.getNews().subscribe( 
      (response) => {
        console.log(response)
        this.store.dispatch(new FetchNews({news: response}))
      }
  );
  }

}
