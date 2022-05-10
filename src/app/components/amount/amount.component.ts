import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { INews } from './../../interfaces/news';

import * as fromNews from './../../store/index'

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent implements OnInit {
  public length$: Observable<number>;
  @Input() news: INews[]

  constructor(private newsService: NewsService,
              private store: Store<fromNews.State>) { }

  ngOnInit(): void {
    this.length$ = this.store.select<number>(fromNews.getCount);
  }

}
