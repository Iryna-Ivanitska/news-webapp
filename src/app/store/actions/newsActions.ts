import { Action } from "@ngrx/store";
import { INews } from './../../interfaces/news';

export enum NewsActions {
  GetNews = '[News] GetNews',
  FilterNews = '[News] FilterNews',
  AddKeywords = '[News] AddKeywords',
}

export class FetchNews implements Action {
  readonly type = NewsActions.GetNews;
  constructor(public payload: { news: INews[] }) {}
}

export class SearchNews implements Action {
  readonly type = NewsActions.FilterNews;
  constructor(public payload: { news: INews[] }) {}
}

export class AddSearchKeywords implements Action {
  readonly type = NewsActions.AddKeywords;
  constructor(public payload: { keywords: string[] }) {}
}

export type ActionsUnion = FetchNews | SearchNews | AddSearchKeywords;