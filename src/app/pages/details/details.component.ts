import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { INews } from 'src/app/interfaces/news';

import * as fromNews from './../../store/index'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  newsItem: INews;
  private sub$ = new Subscription

  constructor(private store: Store<fromNews.State>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      this.sub$ = this.store.select(fromNews.getNewsById(id)).subscribe(
        el => this.newsItem = el[0]
      )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
}
