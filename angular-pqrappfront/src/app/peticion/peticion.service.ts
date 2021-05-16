import { Peticion } from './peticion';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeticionService {
  private apiUrl = environment.baseUrl + 'peticion';
  constructor(private http: HttpClient) {}

  getPeticiones(): Observable<Peticion[]> {
    return this.http.get<Peticion[]>(this.apiUrl);
  }

  createPeticion(peticion): Observable<Peticion> {
    return this.http.post<Peticion>(this.apiUrl, peticion);
  }
}
