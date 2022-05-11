import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';
import { Store } from '@ngrx/store';

import * as fromNews from './../../store/index'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: INews
  keywords: string[];
  private sub$ = new Subscription

  constructor(private store: Store<fromNews.State>) { }

  ngOnInit(): void {
   this.sub$.add(
      this.store.select(fromNews.selectKeywords).subscribe( words => this.keywords = words)
     ) 
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

}
