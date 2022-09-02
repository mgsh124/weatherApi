import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  data: Forecast | undefined;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    this.weatherService.getForeCast().subscribe({
      next: (res) => (this.data = res),
      error: (err) => console.log(err),
    });
  }
}
