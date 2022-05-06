import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from './../interfaces/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  BASE_URL = "https://api.spaceflightnewsapi.net/v3"

  constructor(private http: HttpClient) { }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${this.BASE_URL}/articles?_limit=100`)
  }

}
