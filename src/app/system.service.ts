import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { System } from './system';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  url!: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url;
  }

  /** GET systems from the server */
  getSystems(): Observable<System[]> {
    const result = this.http.get<System[]>(this.url);
    return result;
  }
}
