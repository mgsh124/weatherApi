import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getForeCast() {
    return this.http.get<Forecast>(environment.weatherApiEndpoint);
  }
}
