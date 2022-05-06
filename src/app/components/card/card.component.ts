import { Component, Input, OnInit } from '@angular/core';
import { INews } from './../../interfaces/news';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: INews

  constructor() { }

  ngOnInit(): void {
  }

}
