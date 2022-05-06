import { Component, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  news: INews[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.news
  }

}
