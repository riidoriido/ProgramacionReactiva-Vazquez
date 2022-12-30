import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDigimonService {
  baseUrl: string = 'https://digimon-api.vercel.app/api/digimon/';

  constructor(private http: HttpClient) {}

  getDigimon(name: string) {
    return this.http.get<any>(this.baseUrl + 'name/:' + name);
  }

  getList(level: string) {
    return this.http.get<any>(this.baseUrl + 'level/:' + level);
  }
}
