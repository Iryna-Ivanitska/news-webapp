import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as NEWS from './reducers/newsReducer'

export interface State {
  newsList: NEWS.IState;
}

export const reducers: ActionReducerMap<State, any> = {
  newsList: NEWS.NewsReducer,
};

export const selectNews = (state: State) => state.newsList;

export const selectNewsList = createSelector(
  selectNews,
  (state: NEWS.IState) => state.news
);
export const getCount = createSelector(
  selectNews,
  (state: NEWS.IState) => state.count
);
export const getNewsById = (newsId: number) => createSelector(
  selectNews,
  (state: NEWS.IState) => state.news.filter(news => news.id === newsId)
);
export const selectFilterNews = createSelector(
  selectNews,
  (state: NEWS.IState) => state.filteredNews
);




