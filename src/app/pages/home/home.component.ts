import { Component, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public news: INews[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews().subscribe( 
      response => this.news = response
    )
  }

}
