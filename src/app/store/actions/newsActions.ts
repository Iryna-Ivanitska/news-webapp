import { Action } from "@ngrx/store";
import { INews } from './../../interfaces/news';

export enum NewsActions {
  GetNews = '[News] GetNews',
}

export class FetchNews implements Action {
  readonly type = NewsActions.GetNews;

  constructor(public payload: { news: INews[] }) {}
}

export type ActionsUnion = FetchNews;