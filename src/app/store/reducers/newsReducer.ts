import { INews } from './../../interfaces/news';
import { ActionsUnion, NewsActions } from '../actions/newsActions';

export interface IState {
  news: INews[],
  count: number,
  filteredNews: INews[],
  keywords: string[]
}

const initialState: IState = {
  news: [],
  count: 0,
  filteredNews: [],
  keywords: []
}

export function NewsReducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {
    case NewsActions.GetNews: 
      return {
        ...state,
        news: action.payload.news,
        filteredNews: action.payload.news,
        count: action.payload.news.length
      } 
    case NewsActions.FilterNews: 
      return {
        ...state,
        filteredNews: action.payload.news,
        count: action.payload.news.length
      } 
    case NewsActions.AddKeywords: 
      return {
        ...state,
        keywords: action.payload.keywords,
      } 
    default: return {...state}
  }
}

