import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peticion } from '../peticion/peticion';
import { Queja } from '../queja/queja';
import { Reclamo, ReclamoPeticionResult, ReclamoQuejaResult } from './reclamo';

@Injectable({
  providedIn: 'root',
})
export class ReclamoService {
  private apiUrl = environment.baseUrl + 'reclamo';
  private apiUrlPeticion = environment.baseUrl + 'peticion';
  private apiUrlQueja = environment.baseUrl + 'queja';

  constructor(private http: HttpClient) {}

  getReclamosConPeticiones(): Observable<ReclamoPeticionResult[]> {
    return this.http.get<ReclamoPeticionResult[]>(
      this.apiUrl + '/lookup/peticion'
    );
  }

  getReclamosConQuejas(): Observable<ReclamoQuejaResult[]> {
    return this.http.get<ReclamoQuejaResult[]>(this.apiUrl + '/lookup/queja');
  }

  getPeticionesDisponiblesReclamo(): Observable<Peticion[]> {
    return this.http.get<Peticion[]>(this.apiUrlPeticion + '/filter/reclamo');
  }

  getQuejasDisponiblesReclamo(): Observable<Queja[]> {
    return this.http.get<Queja[]>(this.apiUrlQueja + '/filter/reclamo');
  }

  createReclamo(reclamo): Observable<Reclamo> {
    return this.http.post<Reclamo>(this.apiUrl, reclamo);
  }
}
