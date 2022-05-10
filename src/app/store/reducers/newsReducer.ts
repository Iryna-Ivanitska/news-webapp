
import { INews } from './../../interfaces/news';
import { ActionsUnion, NewsActions } from '../actions/newsActions';

export interface IState {
  news: INews[],
  count: number
}

const initialState: IState = {
  news: [],
  count: 0
}

export function NewsReducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {
    case NewsActions.GetNews: 
      return {
        ...state,
        news: action.payload.news,
        count: action.payload.news.length
      }
    default: return {...state}
  }
}

