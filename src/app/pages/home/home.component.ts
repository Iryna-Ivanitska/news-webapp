import { Component, OnInit } from '@angular/core';
import { News } from './../../interfaces/news';
import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews().subscribe( 
      response => console.log(response)
    )
  }

}
