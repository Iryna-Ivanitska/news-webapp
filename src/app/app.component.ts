import { Component } from '@angular/core';
import { INews } from './interfaces/news';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public news: INews[];
  isLoaded: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe( () =>{
      this.news = this.newsService.news
      this.isLoaded = true
    }
  );
  }
}
