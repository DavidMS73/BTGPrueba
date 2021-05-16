import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reclamo, ReclamoPeticionResult, ReclamoQuejaResult } from './reclamo';

@Injectable({
  providedIn: 'root',
})
export class ReclamoService {
  private apiUrl = environment.baseUrl + 'reclamo';
  constructor(private http: HttpClient) {}

  getReclamosConPeticiones(): Observable<ReclamoPeticionResult[]> {
    return this.http.get<ReclamoPeticionResult[]>(
      this.apiUrl + '/lookup/peticion'
    );
  }

  getReclamosConQuejas(): Observable<ReclamoQuejaResult[]> {
    return this.http.get<ReclamoQuejaResult[]>(this.apiUrl + '/lookup/queja');
  }

  createReclamo(reclamo): Observable<Reclamo> {
    return this.http.post<Reclamo>(this.apiUrl, reclamo);
  }
}
