import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from './../interfaces/news';
import { Observable, tap, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  BASE_URL = "https://api.spaceflightnewsapi.net/v4"
  news: INews[] = []

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews[]> {
    return this.http.get<{ results: INews[] }>(`${this.BASE_URL}/articles/?limit=50`).pipe(
      map(response => response.results),
      tap(news => this.news = news),
      catchError(err => throwError(() => new Error(`Error fetching news: ${err.message}`)))
    );
  }
}
