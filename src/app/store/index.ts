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

