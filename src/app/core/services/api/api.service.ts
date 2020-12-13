import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Quote } from '../../models/quote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public loadCharacters(): Observable<Character[]> {
    return this.http.get<any>(`${environment.apiUrl}/characters`).pipe(
      map(data => data)
    );
  }

  loadQuotes(author): Observable<Quote[]> {
    return this.http.get<any>(`${environment.apiUrl}/quote?author=${author}`).pipe(
      map(data => data)
    );
  }



}
