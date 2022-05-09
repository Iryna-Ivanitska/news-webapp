
import { INews } from './../../interfaces/news';
import { ActionsUnion, NewsActions } from '../actions/newsActions';

export interface IState {
  news: INews[]
}

const initialState: IState = {
  news: [{
    id: 14958,
    title: "NASA, ESA Astronauts Safely Return to Earth",
    url: "http://www.nasa.gov/press-release/nasa-esa-astronauts-safely-return-to-earth",
    imageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/nhq202205060003.jpg?itok=nJXN4A_c",
    newsSite: "NASA",
    summary: "NASA’s SpaceX Crew-3 astronauts aboard the Dragon Endurance spacecraft safely splashed down Friday in the Gulf of Mexico off the coast of Florida, completing the agency’s third long-duration commercial crew mission to the International Space Station.",
    publishedAt: "2022-05-06T06:03:00.000Z",
    updatedAt: "2022-05-06T06:14:33.665Z",
    featured: false,
    launches: [
    {
    id: "0d779392-1a36-4c1e-b0b8-ec11e3031ee6",
    provider: "Launch Library 2"
    }
    ],
    events: [
    {
    id: 296,
    provider: "Launch Library 2"
    }
    ]
  }]
}

export function NewsReducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {
    case NewsActions.GetNews: 
      console.log('boom')
      return {
        ...state,
        news: action.payload.news
      }
    default: return state
  }
}
