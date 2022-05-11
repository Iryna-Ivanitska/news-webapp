import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subscription } from 'rxjs';
import { SearchNews } from 'src/app/store/actions/newsActions';
import { INews } from './../../interfaces/news';

import * as fromNews from './../../store/index'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchValue', { static: true }) searchInput: ElementRef;
  sub = new Subscription;
  news: INews[]
  constructor(private store: Store<fromNews.State>) { }

  ngOnInit(): void {
    this.store.select<INews[]>(fromNews.selectNewsList).subscribe(
      el => this.news = el
    )
    const stream$: Observable<any> = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged(),
    )
    this.sub = stream$.subscribe( res => {
      this.search(res)
    })
  }

  search(text: string) {
    if (text == '') {
      this.store.dispatch(new SearchNews({news: this.news}))
      return;
    }
    let arrayOfWords = text.toLowerCase().split(' ');
    console.log(arrayOfWords)
    const filtered = this.news.map( item => {
      let points = 0;

      arrayOfWords.forEach( entry => {
        points += item.title.toLowerCase().split(' ').filter(w => w == entry).length * 2
        points += item.summary.toLowerCase().split(' ').filter(w => w == entry).length
      })

      return {...item, points};
    })
    .filter(el => el.points != 0)
    .sort((a, b) => b.points - a.points)

    console.log(filtered)
    this.store.dispatch(new SearchNews({news: filtered}))
  }
}
