import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchValue', { static: true }) searchInput: ElementRef;
  sub = new Subscription;
  constructor() { }

  ngOnInit(): void {
    const stream$: Observable<any> = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(500),
      distinctUntilChanged(),
    )
    this.sub = stream$.subscribe( res => {
      console.log(res)
    })
  }


}
