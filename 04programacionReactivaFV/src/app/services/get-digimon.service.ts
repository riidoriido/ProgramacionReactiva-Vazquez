import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Digimon } from '../models/digimon.model';

@Injectable({
  providedIn: 'root',
})
export class GetDigimonService {
  constructor(private http: HttpClient) {}

  public getDigimonByName(name: string): Observable<Digimon> {
    const url = 'https://digimon-api.vercel.app/api/digimon/' + name;
    return this.http.get<Digimon>(url);
  }
}
