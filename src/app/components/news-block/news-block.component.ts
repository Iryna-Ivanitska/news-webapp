import { Component, OnInit, Input } from '@angular/core';
import { INews } from './../../interfaces/news';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  @Input() news: INews[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.news)
  }

}
