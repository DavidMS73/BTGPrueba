import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Queja } from './queja';

@Injectable({
  providedIn: 'root',
})
export class QuejaService {
  private apiUrl = environment.baseUrl + 'queja';
  constructor(private http: HttpClient) {}

  getQuejas(): Observable<Queja[]> {
    return this.http.get<Queja[]>(this.apiUrl);
  }

  createQueja(queja): Observable<Queja> {
    return this.http.post<Queja>(this.apiUrl, queja);
  }
}
