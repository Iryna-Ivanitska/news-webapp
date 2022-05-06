import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { INews } from './../../interfaces/news';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {
  public length: number;
  @Input() news: INews[]

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.length = this.newsService.news.length;
  }

}
