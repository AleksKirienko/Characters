import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {
    // console.log('quote author =', this.author);
  }

  loadQuotes(author): Observable<Quote[]> {
    return this.http.get<any>(`https://www.breakingbadapi.com/api/quote?author=${author}`).pipe(
      map(data => data)
    );
  }
}
